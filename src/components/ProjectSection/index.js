import React from 'react'

import { Data } from './Data'

import { TopLine } from "../ImagedSection/ImagedSectionElements"

import { 
    CarouselItem,  
    CarouselCardIcon, 
    CarouselWrapper
} from "../Carousel/CarouselElements";

import {
    ProjectsContainer, 
    ProjectCarouselCard,
    ProjectsHeading, 
    TechWrapper,
    Tech,
    ProjectCarousel,
    ProjectCarouselCardHeader,
    ProjectCardContent
} from './ProjectSectionElements'




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
                <ProjectsHeading>My projects</ProjectsHeading>
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
                                            <ProjectCardContent>{item.content}</ProjectCardContent>
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
