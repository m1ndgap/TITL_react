import styled, { css, keyframes } from 'styled-components';

const squareOnLoad = keyframes`
  from {
    background-position: 100%;
  }
  to {
    background-position: 0;
  }
`

export const MainMenu = styled.nav`
  background-color: #f0f2f6;
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  z-index: 10;
  transition: background-color 300ms;
  `

export const Square = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  height: 100px;
  width: 100px;
  background-image: linear-gradient(to right, #000000 0% 50%, #f0f2f6 50% 100%);
  background-size: 200%;
  background-position: 100%;
  transform: scale(1) rotate(0deg) translateX(0);
  transition: transform 1000ms;
  animation: ${squareOnLoad} 500ms ease-in 1500ms forwards;
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  padding: 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-right: 50px;
`;

export const Title = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  transition: 500ms;
`;

export const Link = styled.span`
  cursor: pointer;
`;

export const Count = styled.span`
  position: relative;
  top: -10px;
  color: #D94343;
  font-size: 12px;
  font-weight: 600;
`;
