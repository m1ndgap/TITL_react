import React, { useRef, useEffect, useState } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import locomotiveScroll from "locomotive-scroll";

import { GlobalStyles } from "../../styles/globalStyles";
import GlobalFonts from "../../styles/fonts";
import { Reset } from 'styled-reset';

import MainMenu from "../MainMenu/MainMenu.jsx";
import Header from "../Header/Header.jsx";
import SvgText from "../SvgText/SvgText.jsx";

import WeCraft from "../WeCraft/WeCraft.jsx";

import Case from "../Case/Case.jsx";
import cases from "../../Mocks/cases.js";

import WhatWeDo from "../WhatWeDo/WhatWeDo.jsx";
import OurAreas from "../OurAreas/OurAreas.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";



const App = () => {
    const containerRef = useRef(null);

    const [scroll, setScroll] = useState({});

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
                containerRef={containerRef}
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
                        data-scroll-speed="10"
                        data-scroll-direction="vertical"
                        data-scroll-id="foo"
                        className={"second-section scroll-section"} >
                        <WeCraft />
                    </section>
                </div>
                <section
                    className={"scroll-section"} >
                    {casesMarkup}
                </section>
                <section
                    data-scroll-section
                    className={"what-we-do"}>
                    <WhatWeDo />
                </section>
                <section
                    data-scroll-section
                    className={"what-we-do"}>
                    <OurAreas />
                </section>
                <section
                    data-scroll-section
                    className={"contact-us"}>
                    <ContactUs />
                </section>

            </LocomotiveScrollProvider>
    );
};

export default App;
