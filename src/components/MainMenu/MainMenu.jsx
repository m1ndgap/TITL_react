import React from "react";
import styled from 'styled-components'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/MainMenu.styles.js';
import {Square} from "./styles/MainMenu.styles.js";

console.log(S)

const MainMenu = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <S.MainMenu>
            <S.Square></S.Square>

        </S.MainMenu>
    );
};

export default MainMenu;
