import styled, { css } from 'styled-components';

export const Area = styled.li`
  position: relative;
  width: 320px;
  padding: 14px 0;
  list-style: none;
`;

export const Link = styled.a`
  width: 100%;
  display: flex;
  cursor: pointer;
  text-decoration: none;
`;

export const Name = styled.span`
  color: #CCCCCC;
  font-size: 21px;
  line-height: 33.6px;
  transition: color 200ms;
  ${Link}:hover & {
    color: #fff;
  }
`;

export const Count = styled.span`
  color: #D94343;
  font-size: 14px;
`

export const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
`;

export const Fill = styled.div`
  width: 0;
  height: 1px;
  background-color: #fff;
  transition: width 1500ms;
`;
