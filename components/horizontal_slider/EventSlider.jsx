'use client'
import React, { useState, useRef,useEffect } from "react";

import Slider from "react-slick";
import Image from "next/image";
import cover0 from "@/app/assets/event (0).png";
import cover1 from "@/app/assets/event (1).jpg";
import cover2 from "@/app/assets/event (2).jpg";
import cover3 from "@/app/assets/event (3).jpg";
import cover4 from "@/app/assets/event (4).jpg";
import cover5 from "@/app/assets/event (5).jpg";
import cover6 from "@/app/assets/event (6).jpg";
const images = [cover0,cover1, cover2, cover3, cover4,cover5,cover6];
export default function EventSlider() {
    const [imageIndex, setImageIndex] = useState(0);
    let sliderRef = useRef(null);
    const settings = {
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      autoplay:true,
      autoplaySpeed:2000,
      arrows:false,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    ,
      beforeChange: (current, next) => {
        setImageIndex(next);
      },
      afterChange: (current) => {
        if (current === images.length - 1) {
            
          setTimeout(() => {
            setImageIndex(1);
            sliderRef.current.slickGoTo(1);
          }, settings.autoplaySpeed);
        }
      },
    };
    useEffect(() => {
        const autoplay = setInterval(() => {
          if (imageIndex === images.length - 1) {
            sliderRef.current.slickGoTo(1);
          } else {
            sliderRef.current.slickNext();
          }
        }, 2000);
    
        return () => {
          clearInterval(autoplay);
        };
      }, [imageIndex]);
return (
  <div className="w-[600px] sm:w-[700px] md:w-[900px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px]   3xl:w-[100vh] relative slider-container">
    <Slider {...settings}
     ref={sliderRef}
    >
      {images.map((img, idx) => (
        <div className={idx === imageIndex ? "px-2 overflow-hidden w-[400px] sm:w-[400px] md:w-[450px] lg:h-[450px] xl:h-[470px] 2xl:h-[470px]   3xl:h-[600px] " : "px-2 overflow-hidden w-[400px] sm:w-[400px] md:h-[450px] xl:h-[470px] lg:h-[450px] 2xl:h-[470px]  3xl:h-[600px]"}>
          <Image className={idx === imageIndex ? "transform scale-150" : ""} src={img} alt={img} />
          <div className={idx===0 ?"hidden":"relative z-50 ml-10 text-sm md:text-xl lg:text-2xl  font-bold text-white bottom-40 "}>
            <div className={idx === imageIndex ? " ml-10 mb-5 transform scale-150 ease-in-out" : ""}>EVENT NAME</div>
            <div className={idx === imageIndex ? " ml-10 transform scale-150 ease-in-out" : "text-md"}>LOCATION</div>
          </div>
        </div>
      ))}
    </Slider>

  </div>
);
}
