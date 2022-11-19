import React from 'react';
import { BackgroundContainer, BackgroundImg, BackgroundImgWrapper, BackgroundSection, BackgroundWrapper, ContentWrapper } from './backElements';


const HeroBackground = ({ title, cover}) => {
    return (
        // <div className="back">
        //     <div className="container">
        //         <h1>{title}</h1>
        //     </div>
        //     <img src={cover} alt="heroImg" />
        // </div>
        <BackgroundSection>
            <BackgroundContainer>
                <BackgroundWrapper>
                    <BackgroundImgWrapper>
                        <BackgroundImg src={cover} alt="heroImg"/>
                        <ContentWrapper>
                            <h1>{title}</h1>
                        </ContentWrapper>
                    </BackgroundImgWrapper>
                </BackgroundWrapper>
            </BackgroundContainer>
        </BackgroundSection>
    )
}

export default HeroBackground