import React from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Area from '../OurAreas_Area/Area.jsx'
import areas from '../../Mocks/areas.js'

import * as S from './styles/OurAreas.styles.js';



const OurAreas = () => {
    const { scroll } = useLocomotiveScroll();
    const areasMarkup = areas.map(item => <Area key={item.id} area={item} />);


    return (
        <S.OurAreas>
            <S.AnimatedLine>
                <div className='fill' />
            </S.AnimatedLine>
            <h2><img src="./img/our-areas.svg" alt=""/></h2>
            <S.TextWrap>
                <S.Text>
                    SaaS products, mobile and web apps, <br /> websites.
                </S.Text>
                <S.List>
                    {areasMarkup}
                </S.List>
                <S.Link>
                    View all cases
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
                        <path d="M13.4176 0L20 6.5L13.4176 13L11.8065 11.4091L15.6387 7.62492H2.88082e-07L0 5.37508H15.6387L11.8065 1.59088L13.4176 0Z" fill="#D94343"/>
                    </svg>

                </S.Link>
            </S.TextWrap>
        </S.OurAreas>
    );
};

export default OurAreas;
