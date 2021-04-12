import React, {useState} from 'react'

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import ImagedSection from '../components/ImagedSection';

import { 
    homeObjFour, 
    homeObjOne, 
    homeObjThree, 
    homeObjTwo 
} from '../components/ImagedSection/Data';

import ProjectSection from '../components/ProjectSection';
import EducationSection from '../components/EducationSection';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />   
            <HeroSection />
            <ImagedSection {...homeObjOne}/>
            <EducationSection {...homeObjTwo}/>
            <ExperienceSection />
            <ImagedSection {...homeObjThree}/>
            <ProjectSection/>
            <ImagedSection {...homeObjFour}/>
            <Footer/>
        </>
    )
}

export default Home
