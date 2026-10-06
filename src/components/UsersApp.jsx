import React, { useEffect, useMemo, useState } from "react";
import useUsers from "../hooks/useUsers";
import styled from "styled-components";
import UserList from "./UserList";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import UserSort from "./UserSort";
import UserDetails from "./UserDetails";
import Button from "./Button/Button";
import ProtectedRoute from "./ProtectedRoute";

const sortUsers = (users, sortBy, sortOrder) => {
  return [...users].sort((a, b) => {
    const valueA = sortBy === "company" ? a.company.name : a[sortBy];

    const valueB = sortBy === "company" ? b.company.name : b[sortBy];

    return sortOrder === "asc"
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  });
};

const UsersApp = () => {
  const { state, loadUsers, dispatch } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("name");
  const [userView, setUserView] = useState("active");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const [deletedUserIds, setDeletedUserIds] = useState(() => {
    return JSON.parse(localStorage.getItem("deletedUserIds")) || [];
  });

  const usersPerPage = 3;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  const filteredUsers = useMemo(() => {
    let users = state.users;

    if (userView === "active") {
      users = users.filter((user) => !deletedUserIds.includes(user.id));
    }

    if (userView === "deleted") {
      users = users.filter((user) => deletedUserIds.includes(user.id));
    }

    if (userView === "all") {
      users = users;
    }

    users = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const sortedUsers = sortUsers(users, sortBy, sortOrder);

    return sortedUsers;
  }, [state.users, searchTerm, sortBy, sortOrder, userView, deletedUserIds]);

  let users;

  if (userView === "active") {
    users = state.users.filter((user) => !deletedUserIds.includes(user.id));
  }

  if (userView === "deleted") {
    users = state.users.filter((user) => deletedUserIds.includes(user.id));
  }

  if (userView === "all") {
    users = state.users;
  }

  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder, sortBy]);

  const handleDeleteUser = (userId) => {
    const updatedDeletedIds = [...deletedUserIds, userId];

    setDeletedUserIds(updatedDeletedIds);

    localStorage.setItem("deletedUserIds", JSON.stringify(updatedDeletedIds));

    setSelectedUser(null);
  };

  const handleUpdateUser = (updatedUser) => {
    dispatch({
      type: "UPDATE_USER",
      payload: updatedUser,
    });
    setSelectedUser(updatedUser);
  };

  return (
    <>
    <ProtectedRoute isAuthenticated={isAuthenticated}>
        <h2>Welcome! You are logged in.</h2>

        <Button variant="info"
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            setIsAuthenticated(false);
          }}
        >
          Logout
        </Button>
      </ProtectedRoute>

      {isAuthenticated ? (
        <div>
          area after login
        </div>
      ) : (
        <div>
          <h2>Login Here!</h2>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={loginData.email}
            onChange={handleLoginChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={loginData.password}
            onChange={handleLoginChange}
          />

          <Button
            variant="info"
            onClick={() => {
              localStorage.setItem("isAuthenticated", "true");
              setIsAuthenticated(true);
            }}
          >
            Login
          </Button>
        </div>
      )}

      
      <h2>Users</h2>

      <SearchInput
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setSelectedUser(null);
        }}
        placeholder="Search users..."
      />

      <UserSort
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortByChange={(e) => {
          setSortBy(e.target.value);
          setSelectedUser(null);
        }}
        onSortOrderChange={(e) => {
          setSortOrder(e.target.value);
          setSelectedUser(null);
        }}
      />

      {state.loading && <p>Loading users...</p>}

      {state.error && !state.loading && <p>Error: {state.error}</p>}

      {state.error && (
        <button onClick={() => loadUsers()} disabled={state.loading}>
          {state.loading ? "Retrying..." : "Retry"}
        </button>
      )}

      {!state.loading && !state.error && filteredUsers.length === 0 && (
        <p>No users found.</p>
      )}

      {!state.loading && !state.error && filteredUsers.length > 0 && (
        <UserList
          users={currentUsers}
          onUserClick={setSelectedUser}
          onDelete={handleDeleteUser}
        />
      )}

      {selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onUpdateUser={handleUpdateUser}
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => {
          setCurrentPage(currentPage - 1);
          setSelectedUser(null);
        }}
        onNext={() => {
          setCurrentPage(currentPage + 1);
          setSelectedUser(null);
        }}
        onPageChange={(page) => {
          setCurrentPage(page);
          setSelectedUser(null);
        }}
      />
      <UserStates>
        <div className="buttonsgroup">
          <button onClick={() => setUserView("active")}>Active Users</button>

          <button onClick={() => setUserView("deleted")}>Deleted Users</button>

          <button onClick={() => setUserView("all")}>All Users</button>
        </div>
      </UserStates>
    </>
  );
};

export default UsersApp;

const UserStates = styled.div`
  width: 400px;
  height: auto;
  background: #ccc;
  border-radius: 10px;
  padding: 30px 20px;
  position: absolute;
  left: 40%;
  bottom: -100px;
  .buttonsgroup {
    display: flex;
    justify-content: space-between;
    button {
      padding: 10px;
    }
  }
`;
