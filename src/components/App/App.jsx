import React, { useRef, useEffect, useState } from "react";
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import locomotiveScroll from "locomotive-scroll";

import { GlobalStyles } from "../../styles/globalStyles";
import GlobalFonts from "../../styles/fonts";
import { PopupProvider } from "../PopupStore/PopupStore";
import useMousePosition from '../_hooks/useMousePosition';

import { Reset } from 'styled-reset';

import Popup from "../Popup/Popup.jsx";

// import MainMenu from "../MainMenu/MainMenu.jsx";
import Header from "../Header/Header.jsx";
import SvgText from "../SvgText/SvgText.jsx";

import * as MS from '../MainMenu/styles/MainMenu.styles.js';
import * as WS from '../WhatWeDo/styles/WhatWeDo.styles';

import WeCraft from "../WeCraft/WeCraft.jsx";

import Case from "../Case/Case.jsx";
import cases from "../../Mocks/cases.js";

// import WhatWeDo from "../WhatWeDo/WhatWeDo.jsx";
import OurAreas from "../OurAreas/OurAreas.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import LoadingScreen from "../LoadingScreen/LoadingScreen.jsx";
import LocomotiveScroll from "locomotive-scroll";
import * as S from "../MainMenu/styles/MainMenu.styles";



const App = () => {
    const containerRef = useRef(null);
    const { scroll } = useLocomotiveScroll();

//    const [scroll, setScroll] = useState({});
    const [menuColor, setMenuColor] = useState('');

    const lWidth = window.screen.width;

    let scrollGlobal = useRef(null);

    if (lWidth > 1024) {
        useEffect(() => {

            scrollGlobal = new LocomotiveScroll({
                el: document.querySelector('main'),
                smooth: true,
            });


        const square = document.querySelector('.mainmenu-square');
        const mainMenu = document.querySelector('.main-menu');
        const mainMenuSpans = document.querySelectorAll('.main-menu .color-span');
        const wwdLine = document.querySelector('.animated-line-wwd');
        const expLines = document.querySelectorAll('.expertise-line');
        const caseLines = document.querySelectorAll('.case-scroll')

        scrollGlobal.on('scroll', (args) => {
            if (args.scroll['y'] > 200) {
                square.style.transform = 'scale(0.5) rotate(90deg) translateY(-50px)'
            } else {
                square.style.transform = 'scale(1) rotate(0deg) translateY(0)'
            }

            caseLines.forEach((line) => {
                if (typeof args.currentElements[`${line.id}`] === 'object' && args.currentElements[`${line.id}`].progress > 0.3) {
                    line.querySelector('.case-line').style.width = '100%'
                }
            })

            if (typeof args.currentElements['header']
                === 'object' && args.currentElements['header'].progress
                > 0.9 && mainMenu.style.backgroundColor != 'rgb(255, 255, 255)') {
                square.style.backgroundImage = 'none';
                square.style.backgroundColor = '#000'
                mainMenu.style.backgroundColor = '#fff';
            } else if (typeof args.currentElements['header']
                === 'object' && args.currentElements['header'].progress
                < 0.9 && mainMenu.style.backgroundColor == 'rgb(255, 255, 255)') {
                mainMenu.style.backgroundColor = '#f0f2f6'
            }

            if (typeof args.currentElements['wwd']
                === 'object' && args.currentElements['wwd'].progress
                > 0.37 && mainMenu.style.backgroundColor != 'rgb(0, 0, 0)') {
                square.style.backgroundColor = '#fff'
                mainMenu.style.backgroundColor = '#000'
                mainMenuSpans.forEach((span) => {
                    span.style.color = '#fff'
                })
                wwdLine.style.width = '100%'
            } else if(typeof args.currentElements['wwd']
                === 'object' && args.currentElements['wwd'].progress
                < 0.37 && mainMenu.style.backgroundColor == 'rgb(0, 0, 0)') {
                square.style.backgroundColor = '#000'
                mainMenu.style.backgroundColor = '#fff'
                mainMenuSpans.forEach((span) => {
                    span.style.color = '#000'
                })
            }

            if (typeof args.currentElements['wwd'] === 'object' && args.currentElements['wwd'].progress > 0.80) {
                expLines.forEach((line) => {
                    let timeOut = window.setTimeout(() => {
                        line.querySelector('.expertise-line-fill').style.width = "100%"
                    }, Math.random()*700)
                })
            }

            if (typeof args.currentElements['contact']
                === 'object' && args.currentElements['contact'].progress
                > 0.47 && mainMenu.style.backgroundColor != 'rgb(255, 255, 255)') {
                square.style.backgroundColor = '#000'
                mainMenu.style.backgroundColor = '#fff'
                mainMenuSpans.forEach((span) => {
                    span.style.color = '#000'
                })
            } else if(typeof args.currentElements['contact']
                === 'object' && args.currentElements['contact'].progress
                < 0.40 && mainMenu.style.backgroundColor == 'rgb(255, 255, 255)') {
                square.style.backgroundColor = '#fff'
                mainMenu.style.backgroundColor = '#000'
                mainMenuSpans.forEach((span) => {
                    span.style.color = '#fff'
                })
            }

        });
    }, []);
    }

    const casesArr = [];
    const casesMarkup = cases.map(item => casesArr.push(item));

    if (lWidth > 1024) {
        return (
            <PopupProvider>
                {/*<LocomotiveScrollProvider*/}
                {/*    options={*/}
                {/*        {*/}
                {/*            smooth: true,*/}
                {/*            // ... all available Locomotive Scroll instance options*/}
                {/*        }*/}
                {/*    }*/}
                {/*    watch={*/}
                {/*        [*/}
                {/*            //...all the dependencies you want to watch to update the scroll*/}
                {/*        ]*/}
                {/*    }*/}
                {/*    containerRef={containerRef}*/}
                {/*>*/}
                <GlobalStyles/>
                <GlobalFonts/>

                <LoadingScreen/>
                <Popup/>

                <MS.MainMenu className={'main-menu'}>
                    <MS.Square
                        onClick={(e) => {
                            e.preventDefault();
                            scrollGlobal.scrollTo('#header')
                        }}
                        className={"mainmenu-square"}>

                    </MS.Square>
                    <MS.MenuList>
                        <MS.MenuItem>
                            <MS.Link onClick={(e) => {
                                e.preventDefault();
                                scrollGlobal.scrollTo("top", {
                                    offset: '1200',
                                })
                            }}>
                                <MS.Title className={'color-span'}>Work</MS.Title>
                                <MS.Count>23</MS.Count>
                            </MS.Link>
                        </MS.MenuItem>
                        <MS.MenuItem>
                            <MS.Link onClick={(e) => {
                                e.preventDefault();
                                scrollGlobal.scrollTo('#what-we-do')
                            }
                            }>
                                <MS.Title className={'color-span'}>Who we are</MS.Title>
                            </MS.Link>
                        </MS.MenuItem>
                        <MS.MenuItem>
                            <MS.Link onClick={(e) => {
                                e.preventDefault();
                                scrollGlobal.scrollTo('#our-areas')
                            }
                            }>
                                <MS.Title className={'color-span'}>Our expertise</MS.Title>
                            </MS.Link>
                        </MS.MenuItem>
                        <MS.MenuItem>
                            <MS.Link onClick={(e) => {
                                e.preventDefault();
                                scrollGlobal.scrollTo('.contact-us')
                            }
                            }>
                                <MS.Title style={{color: "#D94343"}}>Contact us</MS.Title>
                            </MS.Link>
                        </MS.MenuItem>

                    </MS.MenuList>
                </MS.MainMenu>
                <div data-scroll-section

                     id={'header'}>
                    <section
                        data-scroll
                        data-scroll-id={'header'}
                        // data-scroll-speed="1"
                        // data-scroll-direction="vertical"
                        className={"first-section scroll-section section"}>
                        <Header/>
                        <SvgText/>
                    </section>
                    <section
                        data-scroll
                        data-scroll-id={'wecraft'}
                        data-scroll-speed="3"
                        data-scroll-direction="vertical"
                        className={"second-section scroll-section section"}>
                        <WeCraft/>
                    </section>
                </div>
                <section
                    className={"scroll-section section"}
                    data-scroll-id={'cases'}
                    id={"cases-section"}>
                    <Case
                        key={casesArr[0].id}
                        case={casesArr[0]}
                        imgStyle={'0 0 0 100px'}
                        centered={false}
                    />
                    <Case
                        key={casesArr[1].id}
                        case={casesArr[1]}
                        centered={true}
                    />

                    <Case
                        key={casesArr[2].id}
                        case={casesArr[2]}/>
                    <Case
                        key={casesArr[3].id}
                        case={casesArr[3]}/>
                    <Case
                        key={casesArr[4].id}
                        case={casesArr[4]}
                        imgStyle={'100px 0 0 70px'}
                        centered={false}/>
                    <Case
                        key={casesArr[5].id}
                        case={casesArr[5]}
                        imgStyle={'0 0 0 100px'}
                        centered={false}/>
                    <Case
                        key={casesArr[6].id}
                        case={casesArr[6]}/>
                </section>
                <section
                    data-scroll
                    data-scroll-id={'wwd'}
                    data-scroll-section
                    className={"what-we-do"}
                    id={"what-we-do"}>
                    <WS.WhatWeDo>
                        <h2><img src="./img/what-we-do-best.svg" alt=""/></h2>
                        <WS.TextWrap>
                            <WS.Text>
                                We believe that every moment with a viewer is a privilege, and brands deserve creative
                                bravery without the ego. As a result, we create unique solutions that bring added value
                                to our clients and partners — either analogue, digital or spatial.
                            </WS.Text>
                            <WS.Link onClick={(e) => {
                                e.preventDefault();
                                scrollGlobal.scrollTo('.contact-us')
                            }}>
                                Contact us
                                <svg width="12" height="14" viewBox="0 0 12 14">
                                    <path
                                        d="M12.0001 8.07581L6.00006 14L5.97285e-05 8.07581L1.46857 6.62586L4.96167 10.0748L4.96167 1.68495e-07L7.03845 0L7.03845 10.0748L10.5316 6.62586L12.0001 8.07581Z"
                                        fill="#D94343"/>
                                </svg>
                            </WS.Link>

                            <WS.ListsWrap>
                                <div className={'animated-line-wwd'}></div>
                                <WS.ListWrap>
                                    <WS.ListTitle>Research & strategy</WS.ListTitle>
                                    <WS.List>
                                        <li>Competitive analysis</li>
                                        <li>Business analysis</li>
                                        <li>User mapping</li>
                                        <li>Personas</li>
                                        <li>Customer journey mapping</li>
                                        <li>Information architecture</li>
                                        <li>User testing</li>
                                    </WS.List>
                                </WS.ListWrap>
                                <WS.ListWrap>
                                    <WS.ListTitle>Implementation</WS.ListTitle>
                                    <WS.List>
                                        <li>Wireframing and flows</li>
                                        <li>Visual design</li>
                                        <li>Branding</li>
                                        <li>Prototyping</li>
                                        <li>Interaction design</li>
                                        <li>Motion design</li>
                                    </WS.List>
                                </WS.ListWrap>
                                <WS.ListWrap>
                                    <WS.ListTitle>UX/UI design</WS.ListTitle>
                                    <WS.List>
                                        <li>Prototyping</li>
                                        <li>Web app development</li>
                                        <li>Mobile app development</li>
                                    </WS.List>
                                </WS.ListWrap>
                            </WS.ListsWrap>
                        </WS.TextWrap>
                    </WS.WhatWeDo>
                </section>
                <section
                    data-scroll-section
                    className={"our-areas"}
                    id={"our-areas"}>
                    <OurAreas/>
                </section>
                <section
                    data-scroll
                    data-scroll-section
                    data-scroll-id={'contact'}
                    className={"contact-us section"}>
                    <ContactUs/>
                </section>
                <section data-scroll-section>
                </section>

                {/*</LocomotiveScrollProvider>*/}
            </PopupProvider>
        );
    } else {
        return (
            <div className={'mobile-wrap'}>
                <GlobalStyles/>
                <GlobalFonts/>
                <h1>Mobile version coming soon!</h1>
                <section
                    data-scroll
                    data-scroll-section
                    data-scroll-id={'contact'}
                    className={"contact-us section"}>
                    <ContactUs/>
                </section>
            </div>
        )
    }
};

export default App;
