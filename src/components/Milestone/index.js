import React from 'react'
import myImage8 from '../../images/alma-mater.png'
import { 
    ImagedContainer,
    ImagedWrapper,
    ImagedRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap, 
    Img, 
} from '../ImagedSection/ImagedSectionElements'


import { 
    MilestoneCard,
    MilestonesWrapper,
    MilestoneHeader,
    MilestonesContainer,
    MilesColumn1,
    MilesColumn2,
    MilestoneImg,
    MilestoneImgWrap
   
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
                                    <MilestonesContainer >
                                        <MilestonesWrapper>
                                            <MilestoneCard>
                                                <MilesColumn1>
                                                    <MilestoneHeader>  
                                                        Universita di Bologna                          
                                                    </MilestoneHeader>
                                                </MilesColumn1>
                                                <MilesColumn2>
                                                    <MilestoneImgWrap>
                                                        <MilestoneImg src={myImage8} alt={"alt"}/>
                                                    </MilestoneImgWrap>
                                                </MilesColumn2>
                                            </MilestoneCard>
                                        </MilestonesWrapper>
                                    </MilestonesContainer>
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
