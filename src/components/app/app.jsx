import React, { useRef} from "react";
import Test from "../test/test.jsx";
import {LocomotiveScrollProvider, useLocomotiveScroll} from 'react-locomotive-scroll';

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
            <div data-scroll-container ref={containerRef}>
                <Test

                />
            </div>

        </LocomotiveScrollProvider>
    );
};

export default App;
