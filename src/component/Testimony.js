import React from 'react'
import './testimony.css'
const Testimony = ({name,image,description}) => {
  return (
    <article className='testimonyArticleContainer'>
          <div className='testimonyImageContainer'><img className='testimonyImage' src={image} alt={name} /></div>
          <div>
              <p>{description}</p>
              <small>{name}</small>
          </div>
    </article>
  )
}

export default Testimony