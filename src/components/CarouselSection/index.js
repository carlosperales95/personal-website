import React from 'react';
import Carousel from "react-elastic-carousel";
import {CarouselItem, CarouselCard, CarouselDesc, CarouselIcon, CarouselSubHeader, CarouselWrapper} from "./CarouselElements";
//import "./styles.css";
import Icon1 from '../../images/discovery.svg'



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselSection = () => {
  
  return (

    <CarouselWrapper>
      <Carousel breakPoints={breakPoints}>
          <CarouselItem>
            <CarouselCard>
              <CarouselIcon src={Icon1}/>
              <CarouselSubHeader>Project 1</CarouselSubHeader>
              <CarouselDesc>Short description of project</CarouselDesc>
            </CarouselCard>
          </CarouselItem>
          <CarouselItem>
            <CarouselCard>
              <CarouselIcon src={Icon1}/>
              <CarouselSubHeader>Project 2</CarouselSubHeader>
              <CarouselDesc>Short description of project</CarouselDesc>
            </CarouselCard>
          </CarouselItem>
          <CarouselItem>
            <CarouselCard>
              <CarouselIcon src={Icon1}/>
              <CarouselSubHeader>Project 3</CarouselSubHeader>
              <CarouselDesc>Short description of project</CarouselDesc>
            </CarouselCard>
          </CarouselItem>
          <CarouselItem>
            <CarouselCard>
              <CarouselIcon src={Icon1}/>
              <CarouselSubHeader>Project 4</CarouselSubHeader>
              <CarouselDesc>Short description of project</CarouselDesc>
            </CarouselCard>
          </CarouselItem>
          <CarouselItem>
            <CarouselCard>
              <CarouselIcon src={Icon1}/>
              <CarouselSubHeader>Project 5</CarouselSubHeader>
              <CarouselDesc>Short description of project</CarouselDesc>
            </CarouselCard>
          </CarouselItem>
          <CarouselItem>
            <CarouselCard>
              <CarouselIcon src={Icon1}/>
              <CarouselSubHeader>Project 6</CarouselSubHeader>
              <CarouselDesc>Short description of project</CarouselDesc>
            </CarouselCard>
          </CarouselItem>
      </Carousel>
    </CarouselWrapper>
  )
}

export default CarouselSection
