import styled from'styled-components'


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


export const MilestoneCard = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 0.4fr);
    align-items: left;
    grid-template-areas: 'col2 col1';

`

export const MilesColumn1 = styled.div`
    margin-bottom: 2px;
    padding: 0 10px;
    grid-area: col1;
`

export const MilesColumn2 = styled.div`
    margin-bottom: 30px;
    padding: 30px;
    margin-left: 0;
    grid-area: col2;
`

export const MilestoneHeader = styled.div`
    max-width: 250px;
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