import styled, { css } from "styled-components";

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #ffffff;
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success};
    color: #ffffff;
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.heading};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger};
    color: #ffffff;
  `,
};

const sizeStyles = {
  small: css`
    padding: ${({ theme }) => theme.buttonSize.small.padding};
    font-size: ${({ theme }) => theme.buttonSize.small.fontSize};
  `,
  medium: css`
    padding: ${({ theme }) => theme.buttonSize.medium.padding};
    font-size: ${({ theme }) => theme.buttonSize.medium.fontSize};
  `,
  large: css`
    padding: ${({ theme }) => theme.buttonSize.large.padding};
    font-size: ${({ theme }) => theme.buttonSize.large.fontSize};
  `,
};

const StyledButton = styled.button`
  ${({ $variant }) => variantStyles[$variant] ?? variantStyles.primary}
  ${({ $size }) => sizeStyles[$size] ?? sizeStyles.medium}

  border-radius: ${({ theme }) => theme.radius.sm};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  border: none;
  font-weight: 600;
  font-family: inherit;

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ children, variant = "primary", size = "medium", ...rest }) => {
  return (
    <StyledButton $variant={variant} $size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
