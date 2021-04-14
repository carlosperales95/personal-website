import styled from 'styled-components'



export const ExperienceContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding-top: 100px;

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`


export const ExperienceCarouselCard = styled.div`
    background: #fff;
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

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`


export const ExperienceCarouselDropdown = styled.div`
    border-radius: 10px;
    background: transparent;
    margin-left: 0;
    color: #fff;
    height: 300px;
    width: 100%;
    width-width: 700px;
    display: flex;
    align-items: left;
    padding: 30px;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-top: 10px;
    border-style: dotted;
    border: 1px solid;
    border-color: #01BF71;


    // border-bottom: 1px solid #00ffb9;
    // border-top: 1px solid #00ffb9;

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
