import styled, { css } from 'styled-components';

export const WhatWeDo = styled.div`
  display: flex;
  padding-top: 200px ;
  padding-left: calc((100% - 1280px) / 2);
  padding-right: calc((100% - 1280px) / 2);
  padding-bottom: 90px;
  background-color: #000;
   
  h2 {
    margin: 0;
  }
`;

export const TextWrap = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: column nowrap;
`;

export const Text = styled.p`
  margin: 0;
  width: 747px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #CCCCCC;
`;

export const Link = styled.a`
  color: #D94343;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  
  svg {
    margin: 46px 0 0 8px;
  }
`;

export const ListsWrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  margin-top: 70px;
  padding-top: 64px;
  
  .animated-line-wwd {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 300ms ease-in;
    background-color: rgba(255, 255, 255, 0.2);
    
  }
`;

export const ListWrap = styled.div`
  flex-basis: 50%;
  margin-bottom: 64px;
`;

export const ListTitle = styled.h3`
  font-size: 1.1rem;
  color: #cccccc;
`;

export const List = styled.ul`
  color: #cccccc;
  list-style: none;
  margin: 25px 0 0 0;
  padding: 0;
  li {
    font-size: 1.2rem;
    position: relative;
    padding-left: 20px;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      height: 4px;
      width: 4px;
      background-color: #cccccc;
      transform: translateY(-50%);
    }
  }

  li + li {
    margin-top: 10px;
  }
`;
