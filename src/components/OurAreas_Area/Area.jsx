import React from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/Area.styles.js';


const Area = (props) => {
    const { scroll } = useLocomotiveScroll();
    const { name, count, link} = props.area;

    return (
        <S.Area>
            <S.Link href={link.toString()}>
                <S.Name>{name}</S.Name>
                <S.Count>{count}</S.Count>
            </S.Link>
            <S.Line>
                <S.Fill></S.Fill>
            </S.Line>
        </S.Area>
    );
};

export default Area;
