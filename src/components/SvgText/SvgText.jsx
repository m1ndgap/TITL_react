import React from "react";
import styled from 'styled-components'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/SvgText.styles.js';

const SvgText = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <S.SvgTextWrap>
            <img src="./img/hero-text.svg" alt=""/>
        </S.SvgTextWrap>
    );
};

export default SvgText;
