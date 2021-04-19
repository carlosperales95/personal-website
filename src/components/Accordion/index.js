import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import GrowDown from '../AnimationComponents/GrowDown';
import { Data } from './Data'

import { 
    AccordionSection, 
    Container, 
    Wrap, 
    Dropdown,
    IconWrap 
} from './AccordionComponents'

// import Animate from 'animate-css-styled-components';


const Accordion = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {

        if(clicked === index) {
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
                                    <IconWrap>
                                        <span>{clicked === index ? <FaAngleUp /> : <FaAngleDown/>}</span>
                                    </IconWrap>
                                    <h1>{item.title}</h1>
                                    <img src={item.icon} alt="icon"/>
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
