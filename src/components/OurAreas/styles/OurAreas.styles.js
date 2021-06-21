import styled, { css } from 'styled-components';

export const AnimatedLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(100% - 160px);
  height: 6px;
  overflow: hidden;
  transform: translateX(-50%);
  .fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: #333333;
    
  }
`;

export const OurAreas = styled.div`
  position: relative;
  display: flex;
  padding: 154px 80px 90px;
  margin-top: -10px;
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
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #fff;
`;

export const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  margin: 30px 0 0 0;
  padding: 0;
  max-height: 355px;
`;

export const Link = styled.a`
  margin-top: 77px;
  font-size: 20px;
  font-weight: 600;
  color: #D94343;
  cursor: pointer;
  svg {
    margin-left: 18px;
  }
`;
