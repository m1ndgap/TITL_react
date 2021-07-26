import styled, { css } from 'styled-components';

export const Case = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`

export const CaseTextWrap = styled.div`
  max-width: 427px;
  
  figure {
    margin: 0;
    padding: 0;
  }
`

export const Name = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;
`

export const Title = styled.h3`
  margin: 15px 0 17px;
  font-size: 2.6rem;
  line-height: 120%;
  font-weight: 600;
`

export const Link = styled.a`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  color: #D94343;
  font-size: 1.2rem;
  text-decoration: none;
  
  svg {
    margin: 5px 0 0 10px;
  }
`

export const Line = styled.div`
  background-color: #000;
  width: 0;
  height: 1px;
  transition: width 1500ms;
`

export const Feedback = styled.blockquote`
  position: relative;
  margin: 25px 0 0 0;
  padding: 0 0 0 35px;
  font-size: 1rem;
  font-weight: 300;
  
  svg {
    position: absolute;
    top: -7px;
    left: 0
  }
`

export const SignedBy = styled.figcaption`
  margin-top: 22px;
  padding: 0 0 0 35px;
  font-size: 0.9rem;
  font-weight: 600;
`

export const ImgWrap = styled.figure`
  background-color: #f0f2f6;
  height: 747px;
  width: 747px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    margin-top: 50px;
  }
`
export const Picture = styled.picture`
  width: 100%;
`
