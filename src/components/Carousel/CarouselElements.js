import styled from "styled-components";



export const CarouselItem = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100%;
    background-color: transparent;
    color: #01bf71;
    margin: 10 10 10 15px;
    font-size: 4em;
    padding: 20px;
`


export const CarouselWrapper = styled.div`
    background-color: #010606;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 60px 20px 20px 24px;
    justify-content: center;
`


export const CarouselCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`


export const CarouselCardIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`


export const CarouselCardHeader = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;

`


export const CarouselCardContent = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #010606;
`