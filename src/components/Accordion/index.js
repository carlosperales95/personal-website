import React, {useState} from 'react'
import {Data} from './Data'
import {IconContext} from 'react-icons'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import { AccordionSection, Container, Wrap, Dropdown } from './AccordionComponents'
import FadeIn from '../AnimationComponents/FadeIn';
import GrowDown from '../AnimationComponents/GrowDown';
import Animate from 'animate-css-styled-components';

const Accordion = () => {
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked == index) {
            return setClicked(null)
        }

        setClicked(index)
    }


    return (
        <IconContext.Provider value={{ color: '#01BF71', size: '25px' }}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <span>{clicked === index ? <FaAngleUp /> : <FaAngleDown/>}</span>
                                    <h1>{item.title}</h1>
                                    <img src={item.icon}/>
                                </Wrap>
                                {clicked === index ? (
                                   <GrowDown>
                                        <Dropdown>
                                            <h2>{item.studied}</h2>
                                            <h3> ({item.dateFrom} - {item.dateTo})</h3>
                                            <p>{item.content}</p>
                                        </Dropdown>
                                    </GrowDown>
                                ): null}
     
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    )
}

export default Accordion
