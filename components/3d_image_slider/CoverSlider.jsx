'use client'
import React,{useState} from "react";

import Slider from "react-slick";
import Image from "next/image";
import cover1 from "@/app/assets/cover1.jpg";
import cover2 from "@/app/assets/cover2.jpg";
import cover3 from "@/app/assets/cover3.webp";
import cover4 from "@/app/assets/cover4.jpg";

const images = [cover1, cover2, cover3, cover4];
export default function CoverSlider() {
    const [imageIndex, setImageIndex] = useState(0);

      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        arrows:false,
        beforeChange: (current, next) => setImageIndex(next),
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
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className="w-full  slider-container">
      <Slider {...settings} >
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide " : "slide "}>
            <Image src={img} alt={img}  />
          </div>
        ))}
      </Slider>

    </div>
  );
}
