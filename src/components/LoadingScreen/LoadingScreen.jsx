import React, { useEffect, useRef } from "react";
import styled, { css, keyframes } from 'styled-components';


const LogoAnimation = keyframes`
  from {
    stroke-dashoffset: 500;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const LogoFill = keyframes`
  from {
    fill: transparent;
  }
  to {
    fill: #ffffff;
  }
`;

const BGfill = keyframes`
  from {
    background-position: 100%;
  }
  to {
    background-position: 0;
  }
`;

const RemoveLS = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;


const LoadingEl = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  z-index: 12;
  transform: translateX(0);
  animation: ${RemoveLS} 900ms ease-in-out 1100ms forwards;
`
const TitlLogo = styled.svg`
  position: absolute;
  right: 0;
  top: 50px;
  stroke: #ffffff;
  stroke-width: 1px;
  stroke-dasharray: 400;
  stroke-dashoffset: 1500;
  fill: transparent;
  animation: ${LogoAnimation} 500ms ease-in forwards, ${LogoFill} 300ms ease-in forwards 400ms;
`

const GreyWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(to right, #0c0c0c 0% 50%, #000000 50% 100%);
  background-size: 200%;
  background-position: 100%;
  animation: ${BGfill} 500ms ease-in forwards;
`;


const GreySquare = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  background-color: #0c0c0c;
`

const LoadingWrap = styled.div`
  position: relative;
  width: 269px;
  height: 200px;
`;

const LoadingScreen = () => {

    return (
        <LoadingEl>
            <LoadingWrap>
                <GreyWrapper>

                </GreyWrapper>
                <TitlLogo version="1.1" id="titl" x="0px" y="0px"
                     width="170px" height="121px" viewBox="453.5 690 170.369 121" >
                    <path d="M489.758,804.098v-93.513h14.576V695h-43.093v15.585h14.575v93.513H489.758z"/>
                    <path d="M524.358,804.098V695h-13.941v109.098H524.358z"/>
                    <path d="M558.959,804.098v-93.513h14.575V695h-43.092v15.585h14.575v93.513H558.959z"/>
                    <path d="M616.5,804.098h-18.441h-18.441V695h13.941v93.512H616.5V804.098h-18.441"/>
                </TitlLogo>
            </LoadingWrap>
        </LoadingEl>
    )
};

export default LoadingScreen
