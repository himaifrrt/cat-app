import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 200px;

  &:hover {
    background-color: #ddd;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <StyledButton
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </StyledButton>
  );
};

export default Button;
