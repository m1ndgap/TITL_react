import React, { useEffect, useRef } from "react";
import styled, { css } from 'styled-components';
import useMousePosition from "../_hooks/useMousePosition";
import { PopupContext } from "../PopupStore/PopupStore";


const PopupHeader = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  display: block;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: ${props => props.visible ? '1' : '0'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  transition: opacity 200ms ease-in 320ms;
  z-index: 1;
`;

const PopupText = styled.span`
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 70px;
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 200ms ease-in 520ms, transform 200ms ease-in 420ms;
  transform: ${props => props.visible ? 'translateX(15px)' : 'translateX(0)'};
`;

const PopupLink = styled.div`
  position: absolute;
  bottom: 15px;
  right: 25px;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 200ms ease-in 720ms, transform 200ms ease-in 620ms;
  transform: ${props => props.visible ? 'translateX(10px)' : 'translateX(0)'};;
`

const handleBgColor = color => {
    if (color === 'dark') {
        return "#000"
    } else {
        return "#fff"
    }
}


// background: ${props =>
//           props.theme === 'dark' && '#000000' ||
//           props.theme === 'light' && '#fff' ||
//           props.fadecolor
//   };

const PopupEl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => {
      if (props.theme === 'dark' || props.fadecolor) {
          return `#000`
      } else if (props.theme === 'light') {
        return `#fff`
      }
    }
  };
  width: ${props =>
          props.size === 'large' && '173px' ||
          props.size === 'small' && '140px' ||
          "140px"
  };
  height: ${props =>
          props.size === 'large' && '173px' ||
          props.size === 'small' && '140px' ||
          "140px"
  };
  z-index: 1;
  opacity: ${props => props.visible ? '1' : '0'};
  pointer-events: none;
  transition: opacity 200ms ease-in, transform 300ms ease-in-out;
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0.1)'};
  ${props => props.visible ? '' : css`
    ${PopupHeader}, ${PopupText}, ${PopupLink} {
      transition: 0ms;
    }
  `};
  }
`;

const Popup = () => {

    const [ state, dispatch ] = React.useContext(PopupContext)
    const [ oldState, updateOldState] = React.useState(state)
    const popupRef = useRef(null);


    useEffect(() => {
        //console.log(oldState.theme);
        const popupEl = document.querySelector(`.popupEl`)
        window.addEventListener("mousemove", function(evt) {
            popupEl.style.top = (evt.clientY - 20) + 'px';
            popupEl.style.left = (evt.clientX + 20) + 'px';
        });
    }, [state])

    return (
        <PopupEl className={"popupEl"} visible={state.active} theme={state.theme} size={state.size} fadecolor={oldState.theme}>
            <PopupHeader visible={state.active} theme={state.theme}>{state.title}</PopupHeader>
            <PopupText visible={state.active} theme={state.theme}>{state.text}</PopupText>
            <PopupLink visible={state.link} >
                <svg width="20" height="13" viewBox="0 0 20 13" >
                    <path d="M13.4176 0L20 6.5L13.4176 13L11.8065 11.4091L15.6387 7.62492H2.88082e-07L0 5.37508H15.6387L11.8065 1.59088L13.4176 0Z" fill="#D94343"/>
                </svg>
            </PopupLink>
        </PopupEl>
    )
};

export default Popup
