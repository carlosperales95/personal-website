import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrapper,
    SidebarRoute
} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {

    
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='education' onClick={toggle}>Education</SidebarLink>                    
                    <SidebarLink to='experience' onClick={toggle}>Experience</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarRoute to="#">
                         Contact me!
                    </SidebarRoute>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
