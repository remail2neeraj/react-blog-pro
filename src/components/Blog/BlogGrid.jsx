import React from "react";
import { BlogGridWrapper } from "./BlogGrid.styles";

const BlogGrid = ({ children }) => {
  return (
    <BlogGridWrapper>
      {children}
    </BlogGridWrapper>
  );
};

export default BlogGrid;