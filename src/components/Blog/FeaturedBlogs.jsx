import {
    FeaturedSection,
    FeaturedContainer,
    SectionHeader,
    SectionTitle,
    SectionDescription,
    BlogGrid
} from './FeaturedBlogs.styles'
import blogs from "../../data/blogs";
import BlogCard from './BlogCard';

const FeaturedBlogs = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  return (
    
      <FeaturedSection>
        <FeaturedContainer>
          <SectionHeader>
            <SectionTitle>Featured Blogs</SectionTitle>
            <SectionDescription>
              Explore our latest articles and learn modern frontend development.
            </SectionDescription>
          </SectionHeader>
          <BlogGrid>
            {featuredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </BlogGrid>
        </FeaturedContainer>
        
      </FeaturedSection>
    
  )
}

export default FeaturedBlogs
