import styled, { css } from 'styled-components';

export const ContactUs = styled.div`
  padding: 160px 347px;
  label + label {
    margin-top: 30px;
  }
`

export const Label = styled.label`
  display: block;
  margin: 30px 0 20px;
  font-size: 16px;
  font-weight: 600;
`;

export const InputSpan = styled.span`
  margin: 0 0 0 0;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 400;
  border: 0;
  border-bottom: 1px solid #000;
  background-color: transparent;
  &::placeholder {
    opacity: 50%;
  }
  &:focus, &:active, &:focus-visible {
    outline: 0;
    border: 0;
    border-bottom: 1px solid #000;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
  }
`;


