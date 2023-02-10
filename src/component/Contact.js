import React from 'react'

const Contact = () => {
  return (
    <section className="contactContainer">
      <div className="contactLeft">
        <div className='whatsappContainer'></div>
        <div className='MessengerContainer'></div>
        <div className='telegram'></div>
      </div>
      <form className="contactRight">
        <p>name</p>
        <input type="text" required placeholder="Enter your name" />
        <p>Email</p>
        <input type="email" required placeholder="Enter your email" />
        <p>Message</p>
        <input type="text" required placeholder="Leave us a message" />
      </form>
    </section>
  );
}

export default Contact