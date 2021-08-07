import styled, { css } from 'styled-components';

export const ContactUs = styled.div`
  min-height: 100vh;
  padding: 260px 347px;
  label + label {
    margin-top: 30px;
  }
  @media (max-width: 1024px) {
    min-height: unset;
    padding: 10px;
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

export const SubmitWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const Submit = styled.button`
  
  margin-left: 0;
  appearance: none;
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 600;
  font-family: "Barlow", sans-serif;
  color: #D94343;
  cursor: pointer
`

export const Privacy = styled.span`
  
  font-weight: 400;
  font-size: 13px;
  color: #CCCCCC;
  
  button {
    cursor: pointer;
    color: #000;
    appearance: none;
    border: none;
    background: none;
  }
`
