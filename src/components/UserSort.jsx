import React from "react";

const UserSort = ({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
}) => {
  return (
    <div style={{display:"inline", marginLeft:"15px"}}>
      <select
        value={sortBy}
        onChange={onSortByChange}
        style={{padding:"20px"}}
      >
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="company">Company</option>
      </select>

      <select
        value={sortOrder}
        onChange={onSortOrderChange}
        style={{padding:"20px"}}
      >
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>
    </div>
  );
};

export default UserSort;