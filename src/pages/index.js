import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ImagedSection from '../components/ImagedSection';
import { 
    homeObjFour, 
    homeObjOne, 
    homeObjThree, 
    homeObjTwo 
} from '../components/ImagedSection/Data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';


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
            <ImagedSection {...homeObjTwo}/>
            <Projects/>
            <ImagedSection {...homeObjThree}/>
            <ImagedSection {...homeObjFour}/>
            <Footer/>
        </>
    )
}

export default Home
