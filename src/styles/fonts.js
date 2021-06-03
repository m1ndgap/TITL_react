import { createGlobalStyle } from 'styled-components';

//import BarlowWoff from './Barlow.woff';
//import BarlowWoff2 from '';

//import BarlowWoff from './Barlow.woff';
//import BarlowSemiBoldWoff2 from './Barlow-Semibold.woff2';

//import BarlowWoff from './Barlow.woff';
//import BarlowBoldWoff2 from './Barlow-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Barlow';
        src: local('Barlow'), local('Barlow'),
        url('./Barlow-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
      font-family: 'Barlow';
      src: local('Barlow'), local('Barlow'),
      url('./Barlow-Semibold.woff2') format('woff2');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Barlow';
      src: local('Barlow'), local('Barlow'),
      url('./Barlow-Bold.woff2') format('woff2');
      font-weight: 800;
      font-style: normal;
    }
`;
