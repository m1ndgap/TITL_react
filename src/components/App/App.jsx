import React, { useRef} from "react";
import {LocomotiveScrollProvider, useLocomotiveScroll} from 'react-locomotive-scroll';

import GlobalStyles from "../../styles/globalStyles";
import GlobalFonts from "../../styles/fonts";
import { Reset } from 'styled-reset';

import MainMenu from "../MainMenu/MainMenu.jsx";
import SvgText from "../SvgText/SvgText.jsx";

const App = (props) => {
    //const {places, descriptions} = props;
    const { scroll } = useLocomotiveScroll();
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={
                {
                    smooth: true,
                    // ... all available Locomotive Scroll instance options
                }
            }
            watch={
                [
                    //...all the dependencies you want to watch to update the scroll
                ]
            }
            containerRef={containerRef}
        >
            <GlobalStyles />
            <GlobalFonts />


            <section data-scroll-container ref={containerRef}>
                <MainMenu />
                <Header />
                <SvgText />
            </section>

        </LocomotiveScrollProvider>
    );
};

export default App;
