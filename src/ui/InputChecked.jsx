import styled from 'styled-components';

const StyledInput = styled.input`
    &:focus {
        outline: none;
    }

    & input[type='checkbox']:disabled {
        accent-color: var(--color-brand-600);
    }
`;

export default function InputChecked({
    isChecked,
    onChange,
    disabled = false,
}) {
    return (
        <StyledInput
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            disabled={disabled}
        />
    );
}
