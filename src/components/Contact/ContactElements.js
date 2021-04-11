import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
`

export const Icon = styled(LinkR)`
        margin-left: 32px;
        margin-top: 32px;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        font-size: 32px;

        @media screen and (max-width: 480px){
            margin-left: 16px;
            margin-top: 8px;
        }

`


export const FormWrapper = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 400px){
            height: 80%;
        }

`

export const FormContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 480px){
            padding: 10px;
        }
`

export const Form = styled.form`
        background: #010101;
        max-width: 400px;
        height: auto;
        width: 100%;
        z-index: 1;
        display: grid;
        margin: 0 auto;
        padding: 80px 32px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

        @media screen and (max-width: 400px) {
            padding: 32px 32px;
        }
`

export const FormHeader = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    color: #fff;
    font-size: 14px;

`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormArea = styled.textarea`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    //display: none;
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    forn-size: 14px;
`
export const FakeFormButton = styled.input`
    position: relative;
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        margin-top: 40px !important;
        margin-right: 100px !important;
    }
`
export const ButtonArea = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

    &:hover {
        
        ${FakeFormButton} {
          margin-top: 100px;
          margin-left: 80px;
          opactity: 1;
          transform: translateY(-2px);
        }
      }

`