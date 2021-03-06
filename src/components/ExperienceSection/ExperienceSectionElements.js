import styled from 'styled-components'
import { CarouselCardContent, CarouselCardHeader, CarouselCardIcon, CarouselCard } from '../Carousel/CarouselElements'
import Carousel from "react-elastic-carousel";
import { Dropdown } from '../Accordion/AccordionComponents';


// ==ProjectSection (Join in shared element and extend)
export const ExperienceContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #010606;
    padding-top: 100px;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 768px) {
        height: 100%;
        height: 1300px;
    }

    @media screen and (max-width: 480px) {
        height: 1350px;
    }
`

// ==Similar to ProjectSection (Join in shared element and extend)
export const ExperienceCarousel = styled(Carousel)`
    .rec-carousel {
        height: 725px !important;

    }

    .rec-arrow-right, .rec-arrow-left{
        margin-bottom: 350px;

        &:hover, &:focus {
            background-color: #01BF71;
            color: #fff;

            &:disabled{ 
                background-color: transparent;
            }
        }
    }

    .rec-dot {
        background-color: #fff;

    }

    .rec-dot_active{
        background-color: #01BF71;
        box-shadow: 0 0 1px 3px #fff;

    }

    @media screen and (max-width: 768px) {
        .rec-arrow-right, .rec-arrow-left{
            margin-bottom: 500px;
        }
        .rec-carousel {
            height: 800px !important;
    
        }
    }

    @media screen and (max-width: 480px) {
        height: 1400px;
        .rec-carousel {
            padding-bottom: 0px;
            height: 850px !important;
        }
        .rec-item-wrapper {
            padding-bottom: 5px;
            margin-bottom: 5px;
    
        }
    }

`


export const ExperienceCarouselCard = styled(CarouselCard)`
    text-align: center;
    padding-bottom: 0px;
    height: 360px;
    width: 100%;
    color: #01BF71;

    ${CarouselCardContent} {
        margin-bottom: 0.2rem;
    }


    @media screen and (max-width: 480px) {
        ${CarouselCardContent} {
            visibility: hidden;
        }
        padding: 10px;
        height: 300px;
      

        span {
            margin-top: -80px;
            size: 10px;
        }
    }
`


export const ExperienceCarouselDropdown = styled(Dropdown)`
    border-radius: 10px;
    background: transparent;
    margin-left: 0;
    color: #fff;
    height: 310px;
    width: 100%;
    max-width: 800px;
    padding: 30px;
    margin-bottom: 30px;
    margin-top: 10px;
    border: 1px solid;
    border-color: #01BF71;
    text-align: left;

    p {
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        height: 100%;
        max-height: 550px;
        h2 {
            display: none;
        }

        p {
            font-size: 0.9rem;
        }

    @media screen and (max-width: 480px) {
        margin-bottom: 50px;
        padding-bottom: 5px;
        height: 100%;
        max-height: 530px;
        h2 {
            display: none;
        }

        p {
            font-size: 0.9rem;
        }
    }
`


export const ExperienceCarouselItem = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-height: 800px;
    width: 100%;
    background-color: transparent;
    color: #01bf71;
    margin: 10 10 10 15px;
    font-size: 4em;
    padding: 20px;
`


export const ExperienceCardIcon = styled(CarouselCardIcon)`
    max-height: 150px;
`


export const ExperienceCardHeader = styled(CarouselCardHeader)`
    font-size: 1.3rem;
`


export const TechInfoContainer = styled.div`
    margin-top: 10px;
    display: flex;
`


export const ToggleWrap = styled.div`
    margin-top: 10px;
    margin-bottom: 0 !important;


`


// WIP

export const ExperienceCarouselPlaceholder = styled.div`
    border-radius: 10px;
    background: transparent;
    height: 300px;
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    position: relative;
    margin-top: ;
   // display: block;
   // z-index: 1;




`

export const ImgBack = styled.img`
    width: 100%;
    max-width: 450px;
    align-content: center;
   // margin-top: -100px;
    padding-right: 0;
    opacity: 0.6;

    @media screen and (max-width: 480px) {
        margin-top: 100px;
    }

`
