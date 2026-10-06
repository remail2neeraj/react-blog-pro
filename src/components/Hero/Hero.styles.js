import styled from "styled-components";
import Container from "../Container/Container";

export const HeroWrapper = styled.section`
  width: 100%;
  background-image: linear-gradient(45deg, #e9fdff, #ffffff);
  padding: 60px 0px;
  min-height: calc(100vh - 70px);
`;

export const HeroContainer = styled(Container)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

export const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const HeroImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
    object-fit: cover;
    display: block;
    transform: translateY(-10px);
    animation: float 4s ease-in-out infinite;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const HeroBadge = styled.span`
  background: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radius.xxl};
  width: fit-content;
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2.5rem, 5vw, 2.5rem);
  letter-spacing: -1px;
`;

export const HeroDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  line-height: 1.7;
  letter-spacing: 0.2px;
`;
