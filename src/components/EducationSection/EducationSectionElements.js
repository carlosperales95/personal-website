import styled from'styled-components'



export const EducationImagedWrapper = styled.div`
    margin-top: 0 !important;
    padding-top: 0 !important;
    display: grid;
    z-index: 1;
    height: 1160px;
    width: 100%;
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: top;

    @media screen and (max-width: 768px) {
        height: 1250px;
    }

`


export const EducationImagedRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: top;
    padding-top: 300px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`


export const EducationTextWrapper = styled.div`
    max-width: 100%;
    padding-top: 0;
    padding-bottom: 60px;
    justify-content: center;
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


export const EducationSubtitle = styled.p`
    max-width: 80%;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`


//



export const MilestoneHeader = styled.div`
    padding-top: 65px;
    font-size: 20px;
    padding-bottom: 2px;
    color: #010606;
`


export const MilestoneImgWrap = styled.div`
    max-width: 130px;
    height: 10%;
`


export const MilestoneImg = styled.img`
    width: 80%;
    margin: 20px 10px 0;
    padding-right: 0;
`


export const MilestoneCard = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 0.4fr);
    align-items: left;
    grid-template-areas: 'col2 col1';

`


export const MilestonesContainer = styled.div`
    color: #fff;
    background: '#f9f9f9';

`


export const MilestonesWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 30px;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    padding-left: 0;
    padding-top: 10px;
    justify-content: left;

`