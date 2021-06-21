import React from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/OurAreas.styles.js';


const OurAreas = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <S.OurAreas>
            <h2><img src="./img/our-areas.svg" alt=""/></h2>

        </S.OurAreas>
    );
};

export default OurAreas;
