import React, {useState, useEffect} from 'react'
import SiteLogo from '../../images/sapocodelogo.png'
import {animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    LogoImg
} from './NavbarElements'



const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        setScrollNav(window.scrollY >= 80)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/personal-website' onClick={toggleHome}>
                        <LogoImg alt="logo" src={SiteLogo}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="education"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                                Education
                            </NavLinks>
                        </NavItem>                        
                        <NavItem>
                            <NavLinks to="experience"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                                Experience
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {/* <NavBtnLink to="#">Contact me!</NavBtnLink> */}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
