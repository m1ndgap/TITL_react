import React from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/ContactUs.styles';


const ContactUs = () => {
    const { scroll } = useLocomotiveScroll();

    const log = () => {
        console.log(123)
    }

    return (
        <S.ContactUs onSubmit={log}>

            <img src="./img/message@titl.svg" alt=""/>
            <form onSubmit={
                (event => {
                    event.preventDefault()
                })
            }>
            <S.Label htmlFor="email">
                <S.InputSpan>Your e-mail</S.InputSpan>
                <S.Input type="email" id="email" placeholder="heytitl@gmail.com"/>
            </S.Label>

            <S.Label htmlFor="text">
                <S.InputSpan>Your message</S.InputSpan>
                <S.Input type="textarea" id="text" placeholder="Hello guys, I want this kind of services, for this kind of project, for this budget, etc."/>
            </S.Label>
            <S.SubmitWrap>
                <S.Submit type={'submit'}>
                    Send message
                </S.Submit>
                <S.Privacy>
                    You agree with our <button role={'button'}>Privacy Policy</button>
                </S.Privacy>
            </S.SubmitWrap>
            </form>
        </S.ContactUs>
    );

};


export default ContactUs;
