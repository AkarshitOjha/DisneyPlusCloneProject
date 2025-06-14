import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = (props)=>{

    let settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }

    return(
        <Carousel {...settings}>
        <Wrap>
            <a>
             <img src="/images/slider-badging.jpg" alt=""></img>   
            </a>
        </Wrap>
        <Wrap>
            <a>
             <img src="/images/slider-badag.jpg" alt=""></img>   
            </a>
        </Wrap>
        <Wrap>
            <a>
             <img src="/images/slider-scale.jpg" alt=""></img>   
            </a>
        </Wrap>
        <Wrap>
            <a>
             <img src="/images/slider-scales.jpg" alt=""></img>   
            </a>
        </Wrap>
        </Carousel>
    )
};


const Carousel = styled(Slider)`
margin-top: 20px;

& > button {
opacity : 0;
height: 100%;
width: 5vw;
z-index: 1;

&:hover{
opacity: 1;
transition: opacity 0.2s ease 0s;
}
}

ul li button{
&:before{
font-size: 10px;
color: rgb(150,158,171);
}
}
li.slick-active button:before{
color: white;
}

.slick-list{
overflow:initial;
}

.slick-prev{
left: -75px;
}
.slick-next{
right: -75px;
}
`;


const Wrap = styled.div`
cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 4px 8px rgba(0,0,0,0.1),      /* subtle drop shadow */
    0 8px 20px rgba(0,0,0,0.15);    /* softer bigger shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  a {
    display: block;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
      border-radius: 10px;
      will-change: transform;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  &:hover {
    box-shadow: 
      0 12px 24px rgba(0,0,0,0.25),
      0 24px 48px rgba(0,0,0,0.20);
    transform: scale(1.04);

    padding: 0;
    border: 1px solid rgba(249,249, 249,0.8);
    tansition-duration:300ms;
  }
`;




export default ImgSlider;