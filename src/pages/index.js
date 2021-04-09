import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import ImagedSection from '../components/ImagedSection';
import { 
    carouselObjs,
    homeObjFour, 
    homeObjOne, 
    homeObjThree, 
    homeObjTwo 
} from '../components/ImagedSection/Data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import CarouselSection from '../components/CarouselSection';
import Milestone from '../components/Milestone';


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
            <Milestone {...homeObjTwo}/>
            <ExperienceSection />
            <ImagedSection {...homeObjThree}/>
            <Projects/>
            <ImagedSection {...homeObjFour}/>
            <Footer/>
        </>
    )
}

export default Home
