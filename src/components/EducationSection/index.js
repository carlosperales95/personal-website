import React from 'react'

import Accordion from '../Accordion'

import { 
    ImagedContainer,    
    TopLine,
    Heading,
    ImgWrap, 
    Img
} from '../ImagedSection/ImagedSectionElements'


import { 
    EducationTextWrapper,
    EducationSubtitle,
    EducationColumn1,
    EducationColumn2,
    EducationWrapper,
    EducationRow

} from './EducationSectionElements'


const EducationSection = ({
    id, 
    lightBg, 
    lightText, 
    imgStart, 
    topLine, 
    headline, 
    darkText, 
    description, 
    img, 
    alt
}) => {

    
    return (
            <>
                <ImagedContainer lightBg={lightBg} id={id}>
                    <EducationWrapper>
                        <EducationRow imgStart={imgStart}>
                            <EducationColumn1>
                                <EducationTextWrapper>
                                    <TopLine>{topLine}</TopLine>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <EducationSubtitle darkText={darkText}>{description}</EducationSubtitle>
                                    <Accordion/>
                                </EducationTextWrapper>
                            </EducationColumn1>
                            <EducationColumn2>
                                <ImgWrap>
                                    <Img src={img} alt={alt}/>
                                </ImgWrap>
                            </EducationColumn2>
                        </EducationRow>
                    </EducationWrapper>
                </ImagedContainer>
            </>
    )
}
export default EducationSection
