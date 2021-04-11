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
    MilestoneCard,
    TextWrapper,
    Subtitle,
    MilestoneHeader,
    MilestonesContainer,
    Column1,
    Column2,
    MilestoneImg,
    MilestoneImgWrap,
    ImagedWrapper,
    ImagedRow

   
} from './MilestoneElements'


const Milestone = ({
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
                    <ImagedWrapper>
                        <ImagedRow imgStart={imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>{topLine}</TopLine>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <Accordion/>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} alt={alt}/>
                                </ImgWrap>
                            </Column2>
                        </ImagedRow>
                    </ImagedWrapper>
                </ImagedContainer>
            </>
    )
}
export default Milestone
