import React, { useState, useMemo, useCallback,useRef, useEffect } from "react";

import categories from "../data/categories";
import blogs from "../data/blogs";

import BlogCard from "../components/Blog/BlogCard";
import Container from "../components/Container/Container";

import {
  Blogsection,
  BlogHeader,
  BlogTitle,
  BlogCount,
  BlogToolbar,
  SearchInput,
  CategoryButtons,
  CategoryButton,
  NoResults,
  Pagination,
  PaginationButton,
} from "../components/Blog/Blog.style";

import BlogGrid from "../components/Blog/BlogGrid";

const Blog = () => {
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

const handleCardClick = useCallback(() => {
  console.log("Blog card clicked");
}, []);

const searchInputRef = useRef(null);
useEffect(() => {
  searchInputRef.current.focus();
}, []);

const countRef = useRef(0);
const handleRefClick = () => {
  countRef.current = countRef.current + 1;
  console.log("Ref Count:", countRef.current);
};

const previousSearch = useRef("");
useEffect(() => {
  console.log("Previous Search:", previousSearch.current);
  console.log("Current Search:", searchTerm);
  previousSearch.current = searchTerm;
}, [searchTerm]);

/////////////////////////////////////////////

  const filteredBlogs = useMemo(() => {
    console.log("🔥 Filtering blogs...");
  return blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase())||blog.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
}, [searchTerm, selectedCategory]);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const selectedCategoryName = selectedCategory === "All" ? "All Blogs"
      : categories.find((category) => category.slug === selectedCategory)
          ?.name + " Blogs";

  return (
    <Blogsection>
      <Container>
        {/* <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button> */}
        <button onClick={handleRefClick}>
          Click Ref Count
        </button>
      {/* Blog Header */}
      <BlogHeader>
        <BlogTitle>
          {searchTerm ? `Search Results for "${searchTerm}"` : selectedCategoryName}
        </BlogTitle>

        <BlogCount>
          {filteredBlogs.length} blog {filteredBlogs.length !== 1 ? "s" : ""} found
        </BlogCount>
      </BlogHeader>

      {/* Search + Category Filter */}
      <BlogToolbar>
        <SearchInput
        ref={searchInputRef}
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        <CategoryButtons>
          <CategoryButton
            $active={selectedCategory === "All"}
            onClick={() => {setSelectedCategory("All"); setCurrentPage(1);}}
          >
            All
          </CategoryButton>

          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              $active={selectedCategory === category.slug}
              onClick={() => {setSelectedCategory(category.slug); setCurrentPage(1);}}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryButtons>
      </BlogToolbar>

      {/* Blog Cards */}
      {currentBlogs.length > 0 ? (
        <BlogGrid>
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onCardClick={handleCardClick}/>
          ))}
        </BlogGrid>
      ) : (
        <NoResults>
          <h2>No blogs found</h2>
          <p>Try another search keyword or category.</p>
        </NoResults>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>

          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationButton
              key={index}
              $active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PaginationButton>
          ))}

          <PaginationButton
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </Pagination>
      )}
    </Container>
    </Blogsection>
  );
};

export default Blog;