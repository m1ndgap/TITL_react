import React from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/ContactUs.styles';


const ContactUs = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <S.ContactUs>
            <img src="./img/form-img.svg" alt=""/>
            <form onSubmit={
                (event => {
                    event.preventDefault()
                })
            }>

            </form>
        </S.ContactUs>

    );
};

export default ContactUs;
