import React from "react";
import styled from 'styled-components'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/Case.styles.js';


const Case = (props) => {
    const { scroll } = useLocomotiveScroll();
    const { id, name, title, link, feedback, signedBy, img} = props.case;

    return (
        <S.Case
            id={'case-scroll-' + id}
            data-scroll-section>
            <S.CaseTextWrap>
                <S.Name>{name}</S.Name>
                <S.Title>{title}</S.Title>
                <S.Link href={link}>
                    <p>View case</p>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" >
                        <path d="M11 1L1 11M11 1V10M11 1H2" stroke="#D94343" strokeWidth="2"/>
                    </svg>
                </S.Link>
                <S.Line />
                <figure>
                    <S.Feedback>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0)">
                                <path d="M5.90948 14.0039H1.88997L2.88998 9.00392H0V2.00391H7.00002L6.99005 8.6019L5.90948 14.0039Z" fill="#D94343"/>
                                <path d="M14.9112 14.0039H10.8917L11.8917 9.00392H9.00171V2.00391H16.0016L15.9916 8.6019L14.9112 14.0039Z" fill="#D94343"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        {feedback}
                    </S.Feedback>
                    <S.SignedBy>{signedBy}</S.SignedBy>
                </figure>
            </S.CaseTextWrap>
            <S.ImgWrap
                >
                <img
                     data-scroll
                     data-scroll-id={'case-scroll-' + id}
                     data-scroll-direction="vertical"
                     data-scroll-speed='4'
                    src={img} alt={name}/>
            </S.ImgWrap>
        </S.Case>
    );
};

export default Case;
