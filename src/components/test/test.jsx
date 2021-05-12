import React from "react";
import styled from 'styled-components'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Redtext = styled.p`
  font-size: 72px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: palevioletred;
`

const Test = () => {
    const { scroll } = useLocomotiveScroll();

    return (
        <div>
            <Redtext>
                123123
            </Redtext>
        </div>
    );
};

export default Test;
