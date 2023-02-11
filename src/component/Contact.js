import React from 'react'
import { useState,useRef } from 'react';
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa';
import "./contact.css"
const Contact = () => {
  const contactObject={name:'',message:'',email:''}
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef=useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    let newMessage = messageRef.current.value
    let newName = nameRef.current.value;
    let newEmail = emailRef.current.value;
    const removeErrorMessage = () => {
      const removeTime=setTimeout(() => {
        setEmailError('')
        setMessageError('')
        setNameError('')
      }, 2000);
      return () => {
        clearTimeout(removeTime)
      }
    }
    if ((newEmail === "") || (newEmail === null)) {
      setEmailError('Enter your email!!!!')
      removeErrorMessage()
    }
    if ((newName === "") || (newName === null)) {
      setNameError("Enter your name!!!!");
      removeErrorMessage()
    }
    if ((newMessage === "" )|| (newMessage === null)) {
      setMessageError("Enter some Messages!!!!");
      removeErrorMessage()
    }
    if ((newEmail )&& (newMessage)&& (newName !== "")) {
      const readyContactObject = {
        ...contactObject,
        name: newName,
        email: newEmail,
        message: newMessage,
      };
      console.log(readyContactObject);
    }
    
    e.target.reset()
  }
  return (
    <section className="contactContainer container">
      <div className="contactLeft">
        <div className="whatsappContainer">
          <a href="https://wa.me/07069258526">
            <BsWhatsapp className="icon" />
          </a>
        </div>
        <div className="MessengerContainer">
          <a href="https://facebook.com/omolade.sunday.75/">
            <BsMessenger className="icon" />
          </a>
        </div>
        <div className="telegram">
          <a href="https://telegram.me/Omolade_sunday">
            <FaTelegramPlane className="icon" />
          </a>
        </div>
      </div>
      <form className="contactRight" onSubmit={submitHandler}>
        <h4>name</h4>

        <input
          ref={nameRef}
          type="text"
          className="Input"
          placeholder="Enter your name"
          // required
        />
        <small className="error">{nameError}</small>
        <h4>Email</h4>
        <input
          // required
          ref={emailRef}
          type="email"
          className="Input"
          placeholder="Enter your email"
        />
        <small className="error">{emailError}</small>
        <h4>Message</h4>
        <textarea
          ref={messageRef}
          className="textarea"
          placeholder="Leave some messages"
          // required
        ></textarea>

        <small className="error">{messageError}</small>
        <button className="btn contactSubmit">submit</button>
      </form>
    </section>
  );
}

export default Contact