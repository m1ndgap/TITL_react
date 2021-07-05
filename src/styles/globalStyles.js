import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
      position: relative;
        * {
          box-sizing: border-box
        } 
    }
  
    body {
      position: relative;
      margin: 0;
      padding: 0;
      background: #000000;
      font-family: "Barlow", sans-serif;
    }
    
    main {
      position: relative;
      width: 1440px;
      min-height: 100vh;
      margin: 0 auto 0;
      background-color: #fff;
    }
    
    .scroll-section {
      position: relative;
      padding: 0 80px 100px 80px;
    }
    
    .first-section {
      background-color: #f0f2f6;
      padding-top: 100px;
    }

    .second-section {
      background-color: #fff;
      padding-top: 100px;
    }
    
    // LOCOMOTIVE
    /*! locomotive-scroll v4.1.1 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
    html.has-scroll-smooth {
      overflow: hidden; }

    html.has-scroll-dragging {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; }

    .has-scroll-smooth body {
      overflow: hidden; }

    .has-scroll-smooth [data-scroll-container] {
      min-height: 100vh; }

    [data-scroll-direction="horizontal"] [data-scroll-container] {
      height: 100vh;
      display: inline-block;
      white-space: nowrap; }

    [data-scroll-direction="horizontal"] [data-scroll-section] {
      display: inline-block;
      vertical-align: top;
      white-space: nowrap;
      height: 100%; }

    .c-scrollbar {
      position: absolute;
      right: 0;
      top: 0;
      width: 11px;
      height: 100%;
      transform-origin: center right;
      transition: transform 0.3s, opacity 0.3s;
      opacity: 0; }
    .c-scrollbar:hover {
      transform: scaleX(1.45); }
    .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
      opacity: 1; }
    [data-scroll-direction="horizontal"] .c-scrollbar {
      width: 100%;
      height: 10px;
      top: auto;
      bottom: 0;
      transform: scaleY(1); }
    [data-scroll-direction="horizontal"] .c-scrollbar:hover {
      transform: scaleY(1.3); }

    .c-scrollbar_thumb {
      position: absolute;
      top: 0;
      right: 0;
      background-color: black;
      opacity: 0.5;
      width: 7px;
      border-radius: 10px;
      margin: 2px;
      cursor: -webkit-grab;
      cursor: grab; }
    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing; }
    [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
      right: auto;
      bottom: 0; }
`;

