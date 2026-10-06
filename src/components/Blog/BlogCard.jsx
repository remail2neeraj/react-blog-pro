import React from 'react'
import authors from "../../data/authors";
import { useNavigate } from "react-router-dom";
import {
  BlogCardWrapper,
  BlogImageWrapper,
  BlogContents,
BlogCategory,
BlogTitle,
BlogExcerpt,
BlogMeta,
} from './BlogCard.styles';
// import Blogcardbox from "../Blog/BlogCard.styles"

const BlogCard = React.memo(({ blog,onCardClick }) => {
  const navigate = useNavigate();
  const author = authors.find(
    (author) => author.id === blog.authorId
  );
  console.log("BlogCard rendered:", blog.title);
  return (
    
      <BlogCardWrapper onClick={() => navigate(`/blog/${blog.slug}`)}>
        {/* <button onClick={onCardClick}>
          Test
        </button> */}
        <BlogImageWrapper>
          <img src={blog.image} alt={blog.title} />
        </BlogImageWrapper>
        <BlogContents>
          <BlogCategory>
            {blog.category}
          </BlogCategory>
          <BlogTitle>
            {blog.title}
          </BlogTitle>
          <BlogExcerpt>
            {blog.excerpt}
          </BlogExcerpt>
          <BlogMeta>
            <p><strong>Author: </strong><span>{author?.name}</span></p>
            <p><strong>Read Time:</strong> {blog.readTime} min</p>
            <p><strong>Published Date:</strong> {blog.publishedDate}</p>
          </BlogMeta>
        </BlogContents>
      </BlogCardWrapper>
    
  );
});

export default BlogCard
