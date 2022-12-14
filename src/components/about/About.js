import React from "react";
import "./about.css";
import perfil from '../../media/perfil.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Bienvenid@ a mi portafolio</h3>
        <p>
        Seré breve y concisa...amo programar, le dedico muchas horas, 
        aprendo de todo el mundo, soy muy curiosa, busco nuevos desafíos, 
        no me intimido fácilmente y tengo mucha creencia
        en mi misma y en mi capacidad de autosuperación...
        Si crees que es algo trillado, te invito a conocerme!!!</p>
        <p>
        Tengo conocimientos, en REACT, JAVASCRIPT, NODE JS,
        REDUX, actualmente estoy estudiando PHP, JAVA, TYPESCRIPT</p>
        <p>
        Mi nivel de ingles es B2, avalado por EFSET, puedes visualizar el 
        certificado haciendo click<a href="https://www.efset.org/cert/curcbA"target="_blank" rel="noreferrer"> aquí</a></p>
      </div>
      <div className="about-img">
        <img
          src={perfil}
          alt="about"
          width='500'
          height='500'
        />
      </div>
    </div>
  );
};

export default About;
