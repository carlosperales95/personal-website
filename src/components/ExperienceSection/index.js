import React, { useState } from 'react';
import Carousel from "react-elastic-carousel";

import { Data } from './Data'
import GrowDown from '../AnimationComponents/GrowDown';
import FadeIn from '../AnimationComponents/FadeIn';

import { 
   // ProjectsContainer, 
    ProjectsHeader 
} from "../ProjectSection/ProjectSectionElements"

import { 
     Subtitle 
 } from "../ImagedSection/ImagedSectionElements"

import { 
    CarouselCardContent, 
    CarouselCardIcon, 
    CarouselCardHeader, 
    CarouselWrapper
} from "../Carousel/CarouselElements";

import {
    ExperienceContainer,
    ExperienceCarouselCard, 
    ExperienceCarouselDropdown, 
    ExperienceCarouselItem,
    ExperienceCarouselPlaceholder,
    ImgBack
} from './ExperienceSectionElements'

import { ImgWrap, TopLine } from "../ImagedSection/ImagedSectionElements"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import imgBack from '../../images/cyborg-unsubscribed.png'



const breakPoints = [
    { width: 1, itemsToShow: 1 }
  ];
  
 
const ExperienceSection = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked == index) {
            return setClicked(null)
        }

        setClicked(index)
    }

    return (
        <ExperienceContainer id="experience">
            <TopLine>My exp over 9000</TopLine>
            <ProjectsHeader>My Experience</ProjectsHeader>
            <Subtitle>Haven't had so many professional experienced so far, but I've been around.</Subtitle>
            {/* <ExperienceCarouselPlaceholder>
                    <ImgBack src={imgBack} alt="cyborg"/>
            </ ExperienceCarouselPlaceholder> */}
            <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    {Data.map((item, index) => {
                            return (
                                <>
                                    <ExperienceCarouselItem onClick={() => toggle(index)} key={index}>
                                        <ExperienceCarouselCard>
                                            <CarouselCardContent>{item.internship ? "Internship" : ""}</CarouselCardContent>
                                            <CarouselCardIcon src={item.icon}/>
                                            <CarouselCardHeader>{item.title}</CarouselCardHeader>
                                            <CarouselCardContent>{item.dateFrom} - {item.dateTo}</CarouselCardContent>
                                            <CarouselCardContent>{item.description}</CarouselCardContent>
                                            <span>{clicked === index ? <FaAngleUp /> : <FaAngleDown/>}</span>
                                        </ExperienceCarouselCard>
                                        {clicked === index ? (
                                        <GrowDown>
                                            <ExperienceCarouselDropdown>
                                                <h2>{item.internship ? "Internship" : ""}</h2>
                                                <h3> ({item.dateFrom} - {item.dateTo})</h3>
                                                <p>{item.description}</p>
                                            </ExperienceCarouselDropdown>
                                        </GrowDown>
                                        ): null}
                                    </ExperienceCarouselItem>
                                </>
                            )
                        })}
                </Carousel>
            </CarouselWrapper>
        </ExperienceContainer>
    )
}

export default ExperienceSection



