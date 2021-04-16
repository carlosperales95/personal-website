import React, {useState} from 'react'
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
    ProjectCarousel,
    ProjectCarouselCardHeader,
    CardSide,
    CardFront,
    CardBack
} from './ProjectSectionElements'

import { TopLine } from "../ImagedSection/ImagedSectionElements"



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

const ProjectSection = () => {
    // const [flipped, setFlipped] = useState(false)

    // const toggle = index => {
    //     if(flipped == index) {
    //         return setFlipped(null)
    //     }

    //     setFlipped(index)
    // }


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
                                        {/* <ProjectCarouselCard onClick={() => toggle(index)} key={index}> */}
                                        <ProjectCarouselCard>    
                                            {/* <CardFront> */}
                                            <CarouselCardIcon src={item.icon}/>
                                            <ProjectCarouselCardHeader href={item.repo}>{item.title}</ProjectCarouselCardHeader>
                                            <CarouselCardContent>{item.content}</CarouselCardContent>
                                            <TechWrapper>
                                                {item.tech1 ? <Tech>{item.tech1}</Tech> : null}
                                                {item.tech2 ? <Tech>{item.tech2}</Tech> : null}
                                                {item.tech3 ? <Tech>{item.tech3}</Tech> : null}
                                            </TechWrapper>
                                            {/* </CardFront> */}
                                            {/* <CardBack>
                                                <h1>HALLO</h1>
                                            </CardBack> */}
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
