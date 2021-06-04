import React from "react";
import styled from 'styled-components'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/Header.styles.js';


const Header = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <>
            <S.MainTitle id="main-title">Titl Agency</S.MainTitle>
            <S.SubTitle>2018 - Present</S.SubTitle>
        </>
    );
};

export default Header;
