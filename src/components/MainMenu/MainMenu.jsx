import React from "react";
import styled from 'styled-components'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import * as S from './styles/MainMenu.styles.js';

const MainMenu = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <S.MainMenu>
            <S.Square></S.Square>
            <S.MenuList>
                <S.MenuItem>
                    <S.Link onClick={(e) => {
                        e.preventDefault();
                        scroll.scrollTo("#cases", 200, 1000, [0.25, 0.00, 0.35, 1.00], false,() => {console.log(123123)})
                    }}>
                        <S.Title>Work</S.Title>
                        <S.Count>23</S.Count>
                    </S.Link>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Link onClick={(e) => {
                        e.preventDefault();
                        scroll.scrollTo('#what-we-do')
                    }
                                   }>
                        <S.Title>Who we are</S.Title>
                    </S.Link>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Link onClick={(e) => {
                        e.preventDefault();
                        scroll.scrollTo('#our-areas')
                        }
                    }>
                        <S.Title>Our expertise</S.Title>
                    </S.Link>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Link onClick={(e) => {
                        e.preventDefault();
                        scroll.scrollTo('.contact-us')
                        }
                    }>
                        <S.Title style={{color: "#D94343"}}>Contact us</S.Title>
                    </S.Link>
                </S.MenuItem>

            </S.MenuList>
        </S.MainMenu>
    );
};

export default MainMenu;
