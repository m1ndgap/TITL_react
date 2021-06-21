import styled, { css } from 'styled-components';

export const MainMenu = styled.nav`
  background-color: #f0f2f6;
  position: fixed;
  top: 0;
  height: 100px;
  width: 1440px;
  display: flex;
  z-index: 10;
  `

export const Square = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  height: 100px;
  width: 100px;
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
