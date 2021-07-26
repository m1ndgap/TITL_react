import React, {useContext} from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { PopupContext } from '../PopupStore/PopupStore';

import * as S from './styles/Area.styles.js';


const Area = (props) => {
    const { scroll } = useLocomotiveScroll();
    const { name, count, link} = props.area;
    const [state, dispatch] = useContext(PopupContext);

    return (
        <S.Area
            onMouseEnter={() => dispatch({type: `toggle_${count}`})}
            onMouseLeave={() => dispatch({type: "toggle_clear"})}
        >
            <S.Link href={link.toString()}>
                <S.Name>{name}</S.Name>
                <S.Count>{count}</S.Count>
            </S.Link>
            <S.Line className={'expertise-line'}>
                <S.Fill className={'expertise-line-fill'}></S.Fill>
            </S.Line>
        </S.Area>
    );
};

export default Area;
