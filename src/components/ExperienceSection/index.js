import React from 'react';
import Carousel from "react-elastic-carousel";
import { ProjectsContainer, ProjectsHeader } from "../Projects/ProjectsElements"
import { CarouselItem,  CarouselDesc, CarouselIcon, CarouselSubHeader, CarouselWrapper} from "../CarouselSection/CarouselElements";
import {CarouselCard} from './ExperienceSectionElements'
import {Data} from './Data'



const breakPoints = [
    { width: 1, itemsToShow: 1 }
  ];
  
 
const ExperienceSection = () => {
    return (
        <ProjectsContainer id="experience">
            <ProjectsHeader>My Experience</ProjectsHeader>
            <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    {Data.map((item, index) => {
                            return (
                                <>
                                    <CarouselItem>
                                        <CarouselCard>
                                            <CarouselDesc>{item.internship ? "Internship" : ""}</CarouselDesc>
                                            <CarouselIcon src={item.icon}/>
                                            <CarouselSubHeader>{item.title}</CarouselSubHeader>
                                            <CarouselDesc>{item.dateFrom} - {item.dateTo}</CarouselDesc>
                                            <CarouselDesc>{item.description}</CarouselDesc>
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

export default ExperienceSection



