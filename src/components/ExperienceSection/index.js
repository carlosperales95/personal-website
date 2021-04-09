import React from 'react';
import Carousel from "react-elastic-carousel";
import { ProjectsContainer, ProjectsHeader } from "../Projects/ProjectsElements"
import { CarouselItem,  CarouselDesc, CarouselIcon, CarouselSubHeader, CarouselWrapper} from "../CarouselSection/CarouselElements";
import {CarouselCard} from './ExperienceSectionElements'
import Icon1 from '../../images/tech_brain.svg'



const breakPoints = [
    { width: 1, itemsToShow: 1 }
  ];
  
 
const ExperienceSection = () => {
    return (
        <ProjectsContainer id="experience">
            <ProjectsHeader>My Experience</ProjectsHeader>
            <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    <CarouselItem>
                    <CarouselCard>
                        <CarouselIcon src={Icon1}/>
                        <CarouselSubHeader>Intership 1</CarouselSubHeader>
                        <CarouselDesc>Short description of internship</CarouselDesc>
                    </CarouselCard>
                    </CarouselItem>
                    <CarouselItem>
                    <CarouselCard>
                        <CarouselIcon src={Icon1}/>
                        <CarouselSubHeader>Intership 2</CarouselSubHeader>
                        <CarouselDesc>project that does internship</CarouselDesc>
                    </CarouselCard>
                    </CarouselItem>
                    <CarouselItem>
                    <CarouselCard>
                        <CarouselIcon src={Icon1}/>
                        <CarouselSubHeader>Traineeship 1</CarouselSubHeader>
                        <CarouselDesc>Short description of traineeship</CarouselDesc>
                    </CarouselCard>
                    </CarouselItem>
                    <CarouselItem>
                    <CarouselCard>
                        <CarouselIcon src={Icon1}/>
                        <CarouselSubHeader>Job 1</CarouselSubHeader>
                        <CarouselDesc>Short description of job</CarouselDesc>
                    </CarouselCard>
                    </CarouselItem>
                    <CarouselItem>
                    <CarouselCard>
                        <CarouselIcon src={Icon1}/>
                        <CarouselSubHeader>Project 5</CarouselSubHeader>
                        <CarouselDesc>Short description of project</CarouselDesc>
                    </CarouselCard>
                    </CarouselItem>
                    <CarouselItem>
                    <CarouselCard>
                        <CarouselIcon src={Icon1}/>
                        <CarouselSubHeader>Project 6</CarouselSubHeader>
                        <CarouselDesc>Short description of project</CarouselDesc>
                    </CarouselCard>
                    </CarouselItem>
                </Carousel>
            </CarouselWrapper>
        </ProjectsContainer>
    )
}

export default ExperienceSection



