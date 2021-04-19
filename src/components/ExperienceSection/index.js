import React, { useState } from 'react';
import Carousel from "react-elastic-carousel";

import { Data } from './Data'
import GrowDown from '../AnimationComponents/GrowDown';
import FadeIn from '../AnimationComponents/FadeIn';

import { 
   // ProjectsContainer, 
    ProjectsHeader, Tech, TechWrapper 
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
    TechInfoContainer,
    ToggleWrap,
    ExperienceCarousel,
    ExperienceCardIcon,
    ExperienceCardHeader,
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
        if(clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }

    return (
        <ExperienceContainer id="experience">
            <TopLine>My exp over 9000</TopLine>
            <ProjectsHeader>My Experience</ProjectsHeader>
            <Subtitle>I haven't had enough time for a lot professional experiences so far, but I've been around. Take a look at all my past jobs.</Subtitle>
            {/* <ExperienceCarouselPlaceholder>
                    <ImgBack src={imgBack} alt="cyborg"/>
            </ ExperienceCarouselPlaceholder> */}
            <CarouselWrapper>
                <ExperienceCarousel breakPoints={breakPoints}>
                    {Data.map((item, index) => {
                            return (
                                <>
                                    <ExperienceCarouselItem onClick={() => toggle(index)} key={index}>
                                        <ExperienceCarouselCard>
                                            <ExperienceCardIcon src={item.icon}/>
                                            <CarouselCardContent>{item.company}</CarouselCardContent>
                                            <ExperienceCardHeader>{item.title}</ExperienceCardHeader>
                                            <CarouselCardContent>{item.dateFrom} - {item.dateTo}</CarouselCardContent>
                                            <ToggleWrap>
                                                <span>{clicked === index ? <FaAngleUp /> : <FaAngleDown/>}</span>
                                            </ToggleWrap>
                                        </ExperienceCarouselCard>
                                        {clicked === index ? (
                                        <GrowDown>
                                            <ExperienceCarouselDropdown>
                                                <h2>{item.internship ? "Internship with" : ""} {item.company}</h2>
                                                <h3>{item.title} ({item.dateFrom} - {item.dateTo})</h3>
                                                <p>{item.description}</p>
                                                <TechInfoContainer>
                                                    <TechWrapper>
                                                        {item.tech1 ? 
                                                            <Tech> {item.tech1}</Tech> 
                                                        : null}
                                                        {item.tech2 ? 
                                                            <Tech> {item.tech2}</Tech> 
                                                        : null}
                                                        {item.tech3 ? 
                                                            <Tech> {item.tech3}</Tech> 
                                                        : null}
                                                        {item.tech4 ? 
                                                            <Tech> {item.tech4}</Tech> 
                                                        : null}
                                                    </TechWrapper>
                                                </TechInfoContainer>
                                            </ExperienceCarouselDropdown>
                                        </GrowDown>
                                        ): null}
                                    </ExperienceCarouselItem>
                                </>
                            )
                        })}
                </ExperienceCarousel>
            </CarouselWrapper>
        </ExperienceContainer>
    )
}

export default ExperienceSection



