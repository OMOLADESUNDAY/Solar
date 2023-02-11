import React, { useState } from 'react'
import { testimoniesData } from '../data/data'
import './testimonies.css'
import Testimony from './Testimony'
const Testimonies = () => {
  const [firstIndex, setFirstIndex] = useState(0);
  const [thirdIndex, setThirdIndex] = useState(3);
  const leftArrow='<';
  const rightArrow='>';
  const displayIndex = testimoniesData.slice(firstIndex, thirdIndex);
  // if (window.screen.width < 600) {
  //   console.log(window.screen.width)
  //   setThirdIndex(testimoniesData.length);
  // }
  const rightClickHandler = () => {
    setThirdIndex((prevThirdIndex) => {
      if (prevThirdIndex >= testimoniesData.length) {
        console.log(prevThirdIndex)
        setThirdIndex(testimoniesData.length)
        setFirstIndex(testimoniesData.length - 3)
      }
      else {
        let newIndex = prevThirdIndex + 1;
        return newIndex;  
      }
    })
    setFirstIndex((prevFirstIndex) => {
      let newIndex = prevFirstIndex + 1
      return(newIndex)
    })
  }
  const leftClickHandler = () => {
    setFirstIndex((prevFirstIndex) => {
      if (prevFirstIndex <= 0) {
        setFirstIndex(0)
        setThirdIndex(3)
      }
      else {
        const newIndex = prevFirstIndex - 1
        return newIndex
      }
    })
    setThirdIndex((prevThirdIndex) => {
      let newIndex = prevThirdIndex - 1;
      return newIndex;
    });
  }
  return (
    <section className="testimoniesWrapper">
      <h2 className="testimoniesh2">Testimonies</h2>
      <div className="testimoniesContainer">
        <div className='leftbtn' onClick={()=>leftClickHandler()}>{leftArrow}</div>
        {displayIndex.map((display)=>{
          const {id,name,image,testimony}=display
          return (
            <Testimony key={id} name={name} description={testimony} image={image} />
          );
        })}
            {/*  */}
            <div className='rightbtn' onClick={()=>rightClickHandler()}>{rightArrow}</div>
      </div>
    </section>
  );
}

export default Testimonies