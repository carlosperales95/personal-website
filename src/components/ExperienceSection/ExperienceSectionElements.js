import styled from 'styled-components'
import { CarouselCardContent, CarouselCardHeader } from '../Carousel/CarouselElements'



export const ExperienceContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #010606;
    padding-top: 100px;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 480px) {
        height: 1350px;
    }
`


export const ExperienceCarouselCard = styled.div`
    background: #fff;
    color: #01BF71;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    width: 100%;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    text-align: center;
    padding-bottom: 0px;
    ${CarouselCardContent} {
        margin-bottom: 0.2rem;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
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


export const ExperienceCarouselDropdown = styled.div`
    border-radius: 10px;
    background: transparent;
    margin-left: 0;
    color: #fff;
    height: 300px;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
    padding: 30px;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-top: 10px;
    border: 1px solid;
    border-color: #01BF71;
    text-align: left;


    h2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: 1rem;
    }
    h3 {
        padding-bottom: 0.5rem;
        font-size: 0.8rem;
    }

    p {
        font-size: 1rem;
    }


    @media screen and (max-width: 480px) {
        height: 100%;
        max-height: 521px;
        h2 {
            display: none;
        }

        p {
            font-size: 0.9rem;
        }
    }
`
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


export const TechInfoContainer = styled.div`
    margin-top: 10px;
    display: flex;
`

export const ToggleWrap = styled.div`
    margin-top: 10px;
    margin-bottom: 0 !important;

`