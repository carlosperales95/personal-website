import styled, { keyframes } from 'styled-components';
import { BaseAnimation } from 'animate-css-styled-components';


const GrowDownAnimation = keyframes`  
  0% {
     clip-path: inset(0 0 100% 0); 
    }
  100% {
     clip-path: inset(0); 
    }
`; 

const GrowDown = styled(BaseAnimation)`
  animation-name: ${GrowDownAnimation};
`; 

export default GrowDown;
