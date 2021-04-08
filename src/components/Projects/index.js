import React from 'react'
import Icon1 from '../../images/discovery.svg'
import Icon2 from '../../images/discovery.svg'
import Icon3 from '../../images/discovery.svg'

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
        <ProjectsContainer id="services">
            <ProjectsHeader>My projects</ProjectsHeader>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsSubHeader>Head</ProjectsSubHeader>
                    <ProjectsDesc>project that does things</ProjectsDesc>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsSubHeader>Head</ProjectsSubHeader>
                    <ProjectsDesc>project that does things</ProjectsDesc>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsSubHeader>Head</ProjectsSubHeader>
                    <ProjectsDesc>project that does things</ProjectsDesc>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
