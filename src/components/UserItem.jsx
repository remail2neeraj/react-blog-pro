import React from "react";
import styled from "styled-components";

const UserItem = ({ user,onClick,onDelete}) => {
  return (
    <UserRow onClick={() => onClick(user)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onDelete(user.id);
        }}
      >
        Delete
      </button>
    </UserRow>
  );
};

const UserRow = styled.div`
  width: 350px;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  margin-bottom:5px;
  background: ${({ theme }) => theme.colors.background};
`;

export default UserItem;