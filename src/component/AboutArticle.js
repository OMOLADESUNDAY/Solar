import React from 'react';

import "./aboutArticle.css";
const AboutArticle = ({name,image,description}) => {
  return (
      <article className='articleContainer'>
          <div className='textContainer'>
              <h3>{name}</h3>
              <p>{ description}</p>
          </div>
          <div className='imageContainer'><img src={image} alt={name} /></div>
        </article>
  )
}

export default AboutArticle