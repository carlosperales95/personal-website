import styled from 'styled-components'


export const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    align-content: center;
    position: relative;
    background: #fff;

    @media screen and (max-width: 768px) {
        margin-bottom: 250px;
    }
`


export const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 30%;
    //box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);


`



export const Wrap = styled.div`
    border-radius: 10px;
    margin-bottom: 5px;
    color: #01BF71;
    background: transparent;
    border: 2px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left !important;
    cursor: pointer;

    h1 {
        padding: 2rem;
        font-size: 1rem;

        @media screen and (max-width: 880px) {
            font-size: 0.9rem;
        }

        @media screen and (max-width: 768px) {
            font-size: 0.8rem;
        }
    }

    span {
        margin-left: 1.5rem;
    }

    img {
        max-height: 50px;
        padding-right: 30px;
    }

`

export const Dropdown = styled.div`
    border-radius: 8px;
    background: #fff;
    color: #1c1c1c;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
    padding: 10px;
    padding-left: 20px;
    margin-bottom: 10px;
    border-style: dotted;
    border: 1px dotted;
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
        font-size: 0.8rem;
    }

`


