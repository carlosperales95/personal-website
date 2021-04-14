import React from 'react'
import { Data } from './Data'
import Carousel from "react-elastic-carousel";

import { 
    CarouselItem,  
    CarouselCardContent, 
    CarouselCardIcon, 
    CarouselCardHeader, 
    CarouselWrapper
} from "../Carousel/CarouselElements";

import {
    ProjectsContainer, 
    ProjectCarouselCard,
    ProjectsHeader, 
    TechWrapper,
    Tech
} from './ProjectSectionElements'

import { TopLine } from "../ImagedSection/ImagedSectionElements"



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

const ProjectSection = () => {


    return (
        <ProjectsContainer id="projects">
                <TopLine>My unicorn companies</TopLine>
                <ProjectsHeader>My projects</ProjectsHeader>
                <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    {Data.map((item, index) => {
                            return (
                                <>
                                    <CarouselItem>
                                        <ProjectCarouselCard>
                                            <CarouselCardIcon src={item.icon}/>
                                            <CarouselCardHeader>{item.title}</CarouselCardHeader>
                                            <CarouselCardContent>{item.content}</CarouselCardContent>
                                            <TechWrapper>
                                                <Tech>{item.tech1 ? item.tech1 : "    "}</Tech>
                                                <Tech>{item.tech2 ? item.tech2 : "    "}</Tech>
                                                <Tech>{item.tech3 ? item.tech3 : "    "}</Tech>
                                            </TechWrapper>
                                        </ProjectCarouselCard>
                                    </CarouselItem>
                                </>
                            )
                        })}
                </Carousel>
            </CarouselWrapper>
        </ProjectsContainer>
    )
}

export default ProjectSection
