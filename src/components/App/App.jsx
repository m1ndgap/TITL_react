import React, { useRef} from "react";
import {LocomotiveScrollProvider, useLocomotiveScroll} from 'react-locomotive-scroll';

import GlobalStyles from "../../styles/globalStyles";
import GlobalFonts from "../../styles/fonts";
import { Reset } from 'styled-reset';

import MainMenu from "../MainMenu/MainMenu.jsx";
import Header from "../Header/Header.jsx";
import SvgText from "../SvgText/SvgText.jsx";

import WeCraft from "../WeCraft/WeCraft.jsx";

import Case from "../Case/Case.jsx";
import cases from "../../Mocks/cases.js";

const App = () => {
    const { scroll } = useLocomotiveScroll();
    //const containerRef = useRef(null);
    const foo = console.log(123)
    const casesMarkup = cases.map(item => <Case key={item.id} case={item} />);


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
                //containerRef={containerRef}
            >
                <GlobalStyles />
                <GlobalFonts />

                <MainMenu />
                <div data-scroll-section >
                    <section
                        data-scroll
                        // data-scroll-speed="1"
                        // data-scroll-direction="vertical"
                        className={"first-section scroll-section"} >
                        <Header />
                        <SvgText />
                    </section>
                    <section
                        data-scroll
                        data-scroll-speed="5"
                        data-scroll-direction="vertical"
                        data-scroll-offset="-500, 0"
                        data-scroll-id="foo"
                        className={"second-section scroll-section"} >
                        <WeCraft />
                    </section>
                </div>
                    <section
                        className={"scroll-section"} >
                        {casesMarkup}
                    </section>


            </LocomotiveScrollProvider>
    );
};

export default App;
