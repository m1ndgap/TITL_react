import React from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/WhatWeDo.styles.js';


const WhatWeDo = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <S.WhatWeDo>
            <h2><img src="./img/what-we-do-best.svg" alt=""/></h2>
            <S.TextWrap>
                <S.Text>
                    We believe that every moment with a viewer is a privilege, and brands deserve creative bravery without the ego. As a result, we create unique solutions that bring added value to our clients and partners — either analogue, digital or spatial.
                </S.Text>
                <S.Link>Contact us
                    <svg width="12" height="14" viewBox="0 0 12 14">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 8.07581L6.00006 14L5.97285e-05 8.07581L1.46857 6.62586L4.96167 10.0748L4.96167 1.68495e-07L7.03845 0L7.03845 10.0748L10.5316 6.62586L12.0001 8.07581Z" fill="#D94343"/>
                    </svg>
                </S.Link>
                <S.ListsWrap>
                    <S.ListWrap>
                        <S.ListTitle>Research & strategy</S.ListTitle>
                        <S.List>
                            <li>Competitive analysis</li>
                            <li>Business analysis</li>
                            <li>User mapping</li>
                            <li>Personas</li>
                            <li>Customer journey mapping</li>
                            <li>Information architecture</li>
                            <li>User testing</li>
                        </S.List>
                    </S.ListWrap>
                    <S.ListWrap>
                        <S.ListTitle>Implementation</S.ListTitle>
                        <S.List>
                            <li>Wireframing and flows</li>
                            <li>Visual design</li>
                            <li>Branding</li>
                            <li>Prototyping</li>
                            <li>Interaction design</li>
                            <li>Motion design</li>
                        </S.List>
                    </S.ListWrap>
                    <S.ListWrap>
                        <S.ListTitle>UX/UI design</S.ListTitle>
                        <S.List>
                            <li>Prototyping</li>
                            <li>Web app development</li>
                            <li>Mobile app development</li>
                        </S.List>
                    </S.ListWrap>
                </S.ListsWrap>
            </S.TextWrap>
        </S.WhatWeDo>

    );
};

export default WhatWeDo;
