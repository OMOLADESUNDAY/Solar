import React from 'react'
import AboutArticle from './AboutArticle';
import { featuresData } from '../data/data';
import './about.css'
import Testimonies from './Testimonies';
const About = () => {
  return (
    <div className="container">
      <section className=" aboutWrapper">
        <h1 className="newsLetterH1">About us</h1>
        <div className="aboutContainer">
          {featuresData.map((singleArticle) => {
            const { id, image, description, name } = singleArticle;
            return (
              <AboutArticle
                key={id}
                name={name}
                image={image}
                description={description}
              />
            );
          })}
        </div>
        <Testimonies />
      </section>
    </div>
  );
}

export default About