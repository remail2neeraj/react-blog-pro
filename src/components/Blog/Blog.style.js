import styled from "styled-components";


export const Blogsection = styled.div`
  padding:50px 0px;
`;
export const BlogHeader = styled.div`
  margin-bottom: 25px;
`;

export const BlogTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BlogCount = styled.p`
  margin-top: 8px;
  color: #666;
`;

export const BlogToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchInput = styled.input`
  width: 280px;
  padding: 12px 20px;
  border: none;
  outline: none;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const CategoryButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 16px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  ${({ $active, theme }) =>
    $active &&
    `
      background: ${theme.colors.primary};
      color: white;
    `}
`;



export const NoResults = styled.div`
  text-align: center;
  padding: 60px 20px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background-color: ${({ $active }) => ($active ? "#2563eb" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#374151")};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ $active }) => ($active ? "#1d4ed8" : "#f3f4f6")};
    border-color: ${({ $active }) => ($active ? "#1d4ed8" : "#9ca3af")};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    background-color: #f9fafb;
    color: #9ca3af;
  }
`;

export const Quote = styled.blockquote`
  margin: 24px 0;
  padding: 16px 20px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  font-style: italic;
`;
export const ContentImage = styled.img`
  display: block;
  width: 100%;
  max-width: 900px;
  height: auto;
  margin: 28px auto;
  border-radius: ${({ theme }) => theme.radius.md};
`;
export const ContentLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;

export const ProgressBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 9999;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: ${({ theme }) => theme.colors.primary};
  transition: width 0.1s ease;
`;