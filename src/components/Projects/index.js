import React from 'react'
import Icon1 from '../../images/discovery.svg'
import Icon2 from '../../images/discovery.svg'
import Icon3 from '../../images/discovery.svg'
import CarouselSection from '../CarouselSection'

import {
    ProjectsContainer, 
    ProjectsCard, 
    ProjectsHeader, 
    ProjectsIcon, 
    ProjectsDesc, 
    ProjectsSubHeader, 
    ProjectsWrapper
} from './ProjectsElemets'

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
                <ProjectsHeader>My projects</ProjectsHeader>
                <CarouselSection/>
        </ProjectsContainer>
    )
}

export default Projects
