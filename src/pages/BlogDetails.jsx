import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import blogs from "../data/blogs";
import styled from "styled-components";
import Container from '../components/Container/Container';
import authors from "../data/authors";
import BlogCard from "../components/Blog/BlogCard";
import BlogContent from "../components/Blog/BlogContent";
import { ProgressBar, ProgressBarWrapper } from "../components/Blog/Blog.style";

const BlogDetails = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const topRef = useRef(null);
  const handleScrollToTop = () => {
  topRef.current.scrollIntoView({
    behavior: "smooth",
  });
};

////////////////////////////////////////////////
  const { slug } = useParams();

  const blog = blogs.find(
    (blog) => blog.slug === slug
  );

  // सबसे पहले check करो
  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  const author = authors.find(
    (author) => author.id === blog.authorId
  );

  const relatedBlogs = blogs.filter(
    (item) =>
      item.category === blog.category &&
      item.slug !== blog.slug
  );

  //page scroll progress
  useEffect(() => {

  const handleScroll = () => {

    const scrollTop = window.scrollY;

    const scrollableHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =  (scrollTop / scrollableHeight) * 100;

    setScrollProgress(progress);
    console.log(progress);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);

  return (
    
    <BlogDetailsWrapper ref={topRef}>
      <ProgressBarWrapper>
        <ProgressBar $progress={scrollProgress} />
      </ProgressBarWrapper>
      <BlogDetailsContainer>

        <BlogCategory>
          {blog.category}
        </BlogCategory>

        <BlogTitle>
          {blog.title}
        </BlogTitle>

        <BlogMeta>
          <span>By {author?.name}</span>
          <span>•</span>
          <span>{blog.readTime} min read</span>
          <span>•</span>
          <span>{blog.publishedDate}</span>
        </BlogMeta>

        <BlogImage
          src={blog.image}
          alt={blog.title}
        />

        <BlogContent className='blogcontent' content={blog.content}/>

        <RelatedSection>
          <RelatedTitle>
            You can also check the Related Blogs
          </RelatedTitle>

          <RelatedGrid>
            {relatedBlogs.map((relatedBlog) => (
              <BlogCard
                key={relatedBlog.id}
                blog={relatedBlog}
              />
            ))}
          </RelatedGrid>
        </RelatedSection>

      </BlogDetailsContainer>
      <button onClick={handleScrollToTop}>↑ Back to Top</button>
    </BlogDetailsWrapper>
  );
};

export default BlogDetails;

 const BlogDetailsWrapper = styled.article`
  padding: 60px 0;
`;

 const BlogDetailsContainer = styled(Container)`
  
`;

 const BlogTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

 const BlogContents = styled.div`
  margin-top: 30px;

  h2 {
    margin-top: 30px;
  }

  p {
    line-height: 1.8;
    margin-top: 15px;
  }
`;

 const BlogCategory = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 12px;
`;

 const BlogMeta = styled.div`
  display: flex;
  gap: 15px;
  color: #666;
  margin-top: 15px;
`;

 const BlogImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  margin-top: 30px;
`;
const RelatedSection = styled.section`
  margin-top: 70px;
`;

const RelatedTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 25px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;