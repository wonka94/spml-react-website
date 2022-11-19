import styled, { css, keyframes } from 'styled-components/macro';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";


/**
 * ----------------------------------------
 * Animations
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * animation kenBurnsRight
 * ----------------------------------------
 */
export const kenBurnsRight = keyframes`
    0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 84% 50%;
            transform-origin: 84% 50%;
    }
    100% {
        -webkit-transform: scale(1.25) translateX(20px);
                transform: scale(1.25) translateX(20px);
        -webkit-transform-origin: right;
                transform-origin: right;
    }
`;

/**
 * ----------------------------------------
 * animation kenBurnsBottomLeft
 * ----------------------------------------
 */
export const kenBurnsBottomLeft = keyframes`
    0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 84%;
            transform-origin: 16% 84%;
    }
    100% {
        -webkit-transform: scale(1.25) translate(-20px, 15px);
                transform: scale(1.25) translate(-20px, 15px);
        -webkit-transform-origin: left bottom;
                transform-origin: left bottom;
    }
`;

/**
 * ----------------------------------------
 * animation fade-in-right
 * ----------------------------------------
 */
export const fadeInRight = keyframes`
    0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
    }
`;

/**
 * ----------------------------------------
 * Animations 
 * ----------------------------------------
 */

export const HeroSection = styled.div`
    height: 90vh;
    max-height: 1000px;
    position: relative;
    overflow: hidden;
    width: 100%;
`;

export const HeroWrapper = styled.div`
    padding-top: 15%;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative; 
`;

export const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;





export const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0vh;
        width: 100%;
        height: 100vh;
        padding: 8px 24px;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%), 
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    animation: ${fadeInRight} 40s cubic-bezier(0.390, 0.575, 0.565, 1.000)  infinite;
    -ms-animation: ${fadeInRight} 40s cubic-bezier(0.390, 0.575, 0.565, 1.000);
    -webkit-animation: ${fadeInRight} 40s cubic-bezier(0.390, 0.575, 0.565, 1.000);
    -moz-animation: ${fadeInRight} 40s cubic-bezier(0.390, 0.575, 0.565, 1.000);
    animation-name: ${(kenBurnsAnimation) => (kenBurnsAnimation ? kenBurnsRight : kenBurnsBottomLeft) };
    animation-duration: 8s;
    animation-iteration-count: infinite;

`;

export const HeroContent = styled.div`
    z-index: 10;
    /* max-width: 1600px; */
    position: relative;
    padding: 8px 24px;
    display: flex;
    /* text-align: center; */
    flex-direction: column;
    align-items: center;
    width: 80%;
    color: #ffffff;
    margin: auto;

    h1 {
        font-size: clamp(1.125rem, 9.5vw, 2.8125rem);
        font-weight: 500;
        text-transform: capitalize;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: center;
        margin-bottom: 0.8rem;
        font-family: 'Oswald', sans-serif;
        
    }

    p{
        font-size: clamp(1rem, 8.5vw, 1.25rem);;
        text-align: center;
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        /* font-weight: 00; */
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        max-width: 90%;
    }

    @media screen and (max-width: 800px){
        
        p{
            text-align: left;
        }
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left:8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size: 20px;
`;

export const arrowButtons = css`
    width:45px;
    height:45px;
    color: rgba(255, 255, 255, 0.95);
    background: transparent;
    border-radius:50px;
    padding: 10px;
    margin-right: 1rem;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.85);
    transition: all 0.3s ease-in-out;
    transform: scale(1.0);
    user-select: none;

    &:hover {
        transform: scale(1.05);
    }
`;

export const SliderButton = styled.div`
    position: absolute;
    bottom: 60px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

export const PrevArrow = styled(TfiAngleLeft)`
    ${arrowButtons}
`;

export const NextArrow = styled(TfiAngleRight)`
    ${arrowButtons}
`;
