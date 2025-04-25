import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input[type='checkbox'] {
    margin-right: 10px;
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked,
    onChange
}) => {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label>
        {label}
      </label>
    </StyledCheckbox>
  );
};

export default Checkbox;
