import React, {useContext} from "react";
import { PopupContext } from '../PopupStore/PopupStore';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/Case.styles.js';


const Case = (props) => {
    const { scroll } = useLocomotiveScroll();
    const { id, name, title, link, feedback, signedBy, img, imgRetina} = props.case;
    const [state, dispatch] = useContext(PopupContext);


    return (
        <S.Case
            data-scroll
            datas-scroll-id={'case-scroll-' + id}
            className={'case-scroll'}
            //data-scroll-position={'bottom'}
            data-scroll-offset={'50%'}
            data-scroll-call={`case-scroll-${id}, ${id}`}
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
                <S.Line className={`case-line case-line-${id}`}/>
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
            data-scroll
            data-scroll-speed='0'
            onMouseEnter={() => dispatch({type: `toggle_${name.toLowerCase()}`})}
            onMouseLeave={() => dispatch({type: "toggle_clear"})}
            >
                <S.Picture className={props.centered ? `centered-img` : ``}>
                    <source srcSet={`${img}, ${imgRetina} 2x`} />
                    <img
                        data-scroll
                        data-scroll-id={`case-scroll-${id}`}
                        data-scroll-direction='vertical'
                        data-scroll-lerp={0.5}
                        data-scroll-speed='2'
                        data-scroll-repeat={true}
                        style={{margin: props.imgStyle}}
                        src={img} alt={name}/>
                </S.Picture>
            </S.ImgWrap>
        </S.Case>
    );
};

export default Case;
