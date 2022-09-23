import React from "react";
import "./slider.css";
import countriesapp from '../../media/countriesapp.png'

const slidesInfo = [
  {
    src: countriesapp,
    alt: "Project 1",
    desc: "Countries app",
    href:"https://countriesapp-j5ecznsl4-gisetaboada1990.vercel.app/"
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "YourShoes E-commerce",
    href:"https://ecommerce-shoes-livid.vercel.app/"
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.href} target="_blank" rel="noreferrer"><img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div></a>
  </div>
));

export default slides;
