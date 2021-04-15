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
    Tech,
    ProjectCarousel
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
                <ProjectCarousel breakPoints={breakPoints}>
                    {Data.map((item, index) => {
                            return (
                                <>
                                    <CarouselItem>
                                        <ProjectCarouselCard>
                                            <CarouselCardIcon src={item.icon}/>
                                            <CarouselCardHeader>{item.title}</CarouselCardHeader>
                                            <CarouselCardContent>{item.content}</CarouselCardContent>
                                            <TechWrapper>
                                                {item.tech1 ? <Tech>{item.tech1}</Tech> : null}
                                                {item.tech2 ? <Tech>{item.tech2}</Tech> : null}
                                                {item.tech3 ? <Tech>{item.tech3}</Tech> : null}
                                            </TechWrapper>
                                        </ProjectCarouselCard>
                                    </CarouselItem>
                                </>
                            )
                        })}
                </ProjectCarousel>
            </CarouselWrapper>
        </ProjectsContainer>
    )
}

export default ProjectSection
