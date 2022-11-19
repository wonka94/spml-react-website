import styled from 'styled-components';

export const BackgroundSection = styled.div`
    height: 55vh;
    max-height: 480px;
    position: relative;
    overflow: hidden;
    width: 100%;
`;

export const BackgroundContainer = styled.div`
    /* padding-top: 15%; */
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const BackgroundWrapper = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const BackgroundImgWrapper = styled.div`
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
        height: 55vh;
        padding: 8px 24px;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%), 
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const BackgroundImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 55vh;
    object-fit: cover;
`;

export const ContentWrapper = styled.div`
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
        font-size: clamp(1.125rem, 9.5vw, 3.25rem);
        font-weight: 500;
        text-transform: capitalize;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: center;
        margin-bottom: 0.8rem;
        font-family: 'Oswald', sans-serif;
        
    }
`;
