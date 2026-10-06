import React from "react";
import UserItem from "./UserItem";
const UserList = ({ users, onUserClick,onDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem user={user} key={user.id} onClick={onUserClick} onDelete={onDelete}/>
      ))}
    </div>
  );
};

export default UserList;

