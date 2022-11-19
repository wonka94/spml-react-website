import React, { useEffect, useState, useRef } from 'react';
import { Button } from '../../common/button/Button';
import { ArrowForward, ArrowRight, HeroContent, HeroImage, HeroSection, HeroSlide, HeroSlider, HeroWrapper, NextArrow, PrevArrow, SliderButton } from './HeroElements';


const Hero = ({ slides, kenBurnsAnimation }) => {
    const [hover, setHover] = useState(false);
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    const onHover = () => {
        setHover(!hover);
    };

    useEffect(
        () => {
            const nextSlide = () => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1));
            };

            timeout.current = setTimeout(nextSlide, 6000);

            return function () {
                if (timeout.current) {
                    clearTimeout(timeout.current);
                }
            };
        },
        [current, length]
    );

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);

        // console.log(current);
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);

    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            <HeroSection>
                <HeroWrapper>
                    {slides.map((slide, index) => {
                        return (
                            <HeroSlide key={index}>
                                {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} kenBurnsAnimation={kenBurnsAnimation ? 0: 1}/>
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.subtitle}</p>
                                        <Button
                                            to={slide.path}
                                            onMouseEnter={onHover}
                                            onMouseLeave={onHover}
                                            primary="true"
                                            css={`
                                            color: #ffffff;
                                            max-width: 160px;
                                            font-size: 1.2rem;
                                            `}
                                        >
                                            {slide.label}  {hover ? <ArrowForward /> : <ArrowRight />}
                                        </Button>
                                    </HeroContent>
                                </HeroSlider>
                                )}
                            </HeroSlide>
                        );
                })}
                <SliderButton>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButton>
                </HeroWrapper>
            </HeroSection>
        </>
    )
}

export default Hero