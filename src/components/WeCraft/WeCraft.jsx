import React from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/WeCraft.styles.js';


const WeCraft = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <S.WeCraftWrap>
            <img src="./img/product.svg" alt=""/>
            <S.Paragraph>We follow new paths, question conventions and always learn something new in the process. To achieve this, we use our talent in strategy, branding, content creation and activation.</S.Paragraph>
            <S.Paragraph>We grow through constant internal and external collaboration, evolving in the way we design and build content, becoming part of something bigger than ourselves while leaving a lasting impression.</S.Paragraph>
        </S.WeCraftWrap>
    );
};

export default WeCraft;
