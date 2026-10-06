import styled from "styled-components";
import Container from "../Container/Container";

export const NavbarWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  min-height: 70px;
  padding: 16px 0;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    color: ${({ theme }) => theme.colors.surface};
  }
`;

export const Searchinput = styled.input`
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 10px;

  &:focus {
    outline: 2px solid yellow;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 24px;
`;
