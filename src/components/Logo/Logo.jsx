import styled from "styled-components";

const LogoText = styled.h2`
  color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;
  font-weight: 700;
`;

const Logo = () => {
  return <LogoText>ReactBlog</LogoText>;
};

export default Logo;