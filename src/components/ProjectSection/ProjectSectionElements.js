import styled from'styled-components'
import Carousel from "react-elastic-carousel"
import { css } from 'styled-components'
import {CarouselCardContent} from '../Carousel/CarouselElements'



export const ProjectsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding-top: 400px;

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`


export const ProjectsCard = styled.div`
   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    max-width: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;


    &.flipped {
        & > div:first-of-type { // frontside of the card
          transform: perspective(1000px) rotateY(-180deg);
        }
    
        & > div:last-of-type { // backside of the card
          trans
        }
    }
`

    // Card sides
    export const CardSide = css`
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-radius: 10px;
        height: 340px;
        padding: 30px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        transition: all 0.2s ease-in-out;
        width: 100%;
        // height: 100%;
        backface-visibility: hidden;
        // transition: all .25s ease-in-out;

        &:hover {
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }
    `

    // Card side - front
    export const CardFront = styled.div`
        ${CardSide};

        font-weight: bold;
        text-align: center;
    `

    // Card side - back
    export const CardBack = styled.div`
        ${CardSide};

        transform: rotateY(-180deg);
    `



export const ProjectCarousel = styled(Carousel)`

    .rec-arrow-right, .rec-arrow-left{

        &:hover, &:focus {
            background-color: #01BF71;
            color: #fff;

            &:disabled{ 
                background-color: transparent;
            }
        }
    }

    .rec-pagination {
        margin-bottom: 1000px !important;
    }

    .rec-dot {
        background-color: #fff;
    }

    .rec-dot_active{
        background-color: #01BF71;
        box-shadow: 0 0 1px 3px #fff;
    }

`


export const ProjectsHeader = styled.h1`
    font-size: 48px;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`


export const TechWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    max-height: 80px;
    margin-top: 0;

`


export const Tech = styled.p`
    font-size: 0.9rem;
    background-color: #ededed;
    padding: 8px;
    border-radius: 10px;
    margin-right: 10px;
    border-color: #01BF71;
    border: 1px, solid;
    color: #01BF71;


`


export const ProjectCarouselCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 360px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        // cursor: pointer;
    }
`




export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`


export const ProjectsSubHeader = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;

`


export const ProjectsDesc = styled.p`
    font-size: 1rem;
    text-align: center;


`


export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1r;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

`

export const ProjectCarouselCardHeader = styled.a`
font-size: 1.2rem;
font-weight: 700;
margin-bottom: 10px;
margin-top: 10px;
text-decoration: none;
color: #01BF71;

&:hover {
    cursor: pointer;
    color: #7BF99B;
}

`

export const ProjectCardContent = styled(CarouselCardContent)`
    min-height: 80px;
    height: 100%;
`