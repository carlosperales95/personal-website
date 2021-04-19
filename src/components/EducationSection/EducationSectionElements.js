import styled from'styled-components'

import { ImagedWrapper, Subtitle, TextWrapper } from '../ImagedSection/ImagedSectionElements'



export const EducationWrapper = styled(ImagedWrapper)`
    margin-top: 0 !important;
    padding-top: 0 !important;
    height: 1160px;
    max-width: 1150px;
    justify-content: top;

    @media screen and (max-width: 768px) {
        height: 1250px;
    }

`


export const EducationRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: top;
    padding-top: 200px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`


export const EducationColumn1 = styled.div`
    margin-bottom: 2px;
    padding: 0 10px;
    grid-area: col1;
    justify-content: center;
    max-width: 100%;


`


export const EducationColumn2 = styled.div`
    margin-bottom: 30px;
    padding: 30px;
    margin-left: 0;
    grid-area: col2;

    @media screen and (max-width: 1000px) {
        padding-top: 100px;
    }
`


export const EducationTextWrapper = styled(TextWrapper)`
    max-width: 100%;
    justify-content: center;
`


export const EducationSubtitle = styled(Subtitle)`
    max-width: 80%;

`

