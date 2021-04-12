import React, { useState } from 'react';
import Carousel from "react-elastic-carousel";

import { Data } from './Data'
import GrowDown from '../AnimationComponents/GrowDown';

import { 
    ProjectsContainer, 
    ProjectsHeader 
} from "../ProjectSection/ProjectSectionElements"

import { 
    CarouselCardContent, 
    CarouselCardIcon, 
    CarouselCardHeader, 
    CarouselWrapper
} from "../Carousel/CarouselElements";

import {
    ExperienceCarouselCard, 
    ExperienceCarouselDropdown, 
    ExperienceCarouselItem
} from './ExperienceSectionElements'




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
        <ProjectsContainer id="experience">
            <ProjectsHeader>My Experience</ProjectsHeader>
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
                                        </ExperienceCarouselCard>
                                        {clicked === index ? (
                                        <GrowDown>
                                            <ExperienceCarouselDropdown>
                                                <h2>{item.internship}</h2>
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
        </ProjectsContainer>
    )
}

export default ExperienceSection



