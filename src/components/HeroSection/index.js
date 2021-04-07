import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroTitle,
    HeroDescription
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
                    I'm a recently graduated Software Engineer y toa la pesca.
                </HeroDescription>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
