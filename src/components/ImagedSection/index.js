import React from 'react'
import { Button } from '../Button/ButtonElements'
import { 
    ImagedContainer,
    ImagedWrapper,
    ImagedRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    BtnWrap,
    Subtitle,
    ImgWrap, 
    Img, 
} from './ImagedSectionElements'


const ImagedSection = ({
    id, 
    lightBg, 
    lightText, 
    imgStart, 
    topLine, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    dark,
    dark2,
    primary,
    where
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
                                {where ? 
                                    <BtnWrap>
                                        <Button to={where} 
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1: 0}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        >{buttonLabel}</Button>
                                    </BtnWrap> 
                                : null}
                                
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

export default ImagedSection
