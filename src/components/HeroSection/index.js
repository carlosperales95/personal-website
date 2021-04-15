import React, {useState} from 'react'
import Video from '../../videos/hack_code.mp4'
import myPDF from './CV_CarlosPerales.pdf'

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroTitle,
    HeroDescription,
    DownloadLink
} from './HeroElements'


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />   
            </HeroBg> 
            <HeroContent>
                <HeroTitle> Hi, I'm Carlos Perales </HeroTitle>
                <HeroDescription>
                    I'm a recently graduated Software Engineer.
                </HeroDescription>
                <DownloadLink href={myPDF} target="_blank" type="application/pdf" download>Download CV</DownloadLink>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
