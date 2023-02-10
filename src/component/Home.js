import React from 'react';
import Thinking from "../image/thinking.jpg";
import { Link } from 'react-router-dom';
import "./home.css"
import Newsletter from './Newsletter';
const Home = () => {
    return (
      <section>
        <div className="container homeContainer">
          <div className="thinkingTextContainer">
            <h1 className="thinkingTextH1">Are you having issues with light?</h1>
            <p className="thinkingText">
              Welcome to D-Lead solar power solution we do all sort of solar
              power connection etc
            </p>
            <Link className="btn getInTouch" to="/contact">
              Get In Touch
            </Link>
          </div>

          <div className="thinkingContainer">
            <img src={Thinking} alt="solar power" />
          </div>
            </div>
            <h1 className='newsLetterH1'>Newsletter</h1>
        <Newsletter />
      </section>
    );
}

export default Home