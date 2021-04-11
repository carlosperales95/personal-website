import React from 'react'
import Icon1 from '../../images/discovery.svg'
import Icon2 from '../../images/discovery.svg'
import Icon3 from '../../images/discovery.svg'
import CarouselSection from '../CarouselSection'
import {Data} from './Data'
import { CarouselItem,  CarouselDesc, CarouselIcon, CarouselSubHeader, CarouselWrapper, CarouselCard} from "../CarouselSection/CarouselElements";
import Carousel from "react-elastic-carousel";

import {
    ProjectsContainer, 
    ProjectsCard, 
    ProjectsHeader, 
    ProjectsIcon, 
    ProjectsDesc, 
    ProjectsSubHeader, 
    ProjectsWrapper,
    TechWrapper,
    Tech
} from './ProjectsElements'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
                <ProjectsHeader>My projects</ProjectsHeader>
                <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    {Data.map((item, index) => {
                            return (
                                <>
                                    <CarouselItem>
                                        <CarouselCard>
                                            <CarouselIcon src={item.icon}/>
                                            <CarouselSubHeader>{item.title}</CarouselSubHeader>
                                            <CarouselDesc>{item.content}</CarouselDesc>
                                            <TechWrapper>
                                                <Tech>{item.tech1 ? item.tech1 : ""}</Tech>
                                                <Tech>{item.tech2 ? item.tech2 : ""}</Tech>
                                                <Tech>{item.tech3 ? item.tech3 : ""}</Tech>
                                            </TechWrapper>
                                        </CarouselCard>
                                    </CarouselItem>
                                </>
                            )
                        })}
                </Carousel>
            </CarouselWrapper>
        </ProjectsContainer>
    )
}

export default Projects
