import React from "react";

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: "20px" }}
      style={{ padding: "20px" }}
    />
  );
};

export default SearchInput;
