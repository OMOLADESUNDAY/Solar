import React, { useRef } from 'react'
import './newletter.css'
const Newsletter = () => {
    const newletterObect={email:''}
    let newLetterRef = useRef()
    const submitHandler = (e) => {
      e.preventDefault();
      const newsLetterMail = newLetterRef.current.value;
        const readyEmail = { ...newletterObect, email: newsLetterMail };
        console.log(readyEmail)
        e.target.reset();
        return(readyEmail)
    }
    return (
      <div className="newsLetterWrapper">
        <div className="container newsletterContainer">
          <form className="form" onSubmit={submitHandler}>
            <input
              className="btn sub"
              type="email"
              placeholder="enter your email"
              required
              ref={newLetterRef}
            />
            <button className="btn subSubmit">Subscribe</button>
          </form>
        </div>
      </div>
    );
}

export default Newsletter