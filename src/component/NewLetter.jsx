import React, { useState } from 'react';
import '../component/NewLetter.css';
import tickIcon from '../assets/images/icon-list.svg';
import desktopImgSrc from '../assets/images/illustration-sign-up-desktop.svg'
import successTick from '../assets/images/icon-success.svg'
import mobileImgSrc from '../assets/images/illustration-sign-up-mobile.svg'
import ResponsiveImage from './Responsive';
export const NewLetter = () => {
  const [emailId,setEmailId] = useState('');
  const [errorState,setErrorState] = useState('');
  const [sendEmailId,setSendEmailId] =useState('');
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const handleSumbit =(e)=>{
    e.preventDefault();
    if(emailId== ""){
      setErrorState("Please Enter Email I'd")
    }
    else if (!validateEmail(emailId)) {
      setErrorState("Enter valid Email Address")
    }
    else{
      setErrorState('');
      setSendEmailId(emailId);
    }
  }
  const handleDelete =()=>{
    setSendEmailId('')
    setEmailId('')
  }
  return (
    <>
    { sendEmailId.length ?  
      <div className="subscribe-box">
          <img src={successTick} alt="success" />
          <div className="text-box">
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to <span>{sendEmailId}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={handleDelete}> Dismiss message</button>
          </div>
        </div>:
        <>
        <div className="container">
        <div className="text-content">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="icon-text">
            <p><img src={tickIcon} alt="tick-icon" /> Product discovery and building what matters</p>
            <p><img src={tickIcon} alt="tick-icon" /> Measuring to ensure updates are a success </p>
            <p><img src={tickIcon} alt="tick-icon" /> And much more!</p>
          </div>
          <form onSubmit={(e)=>handleSumbit(e)}>
            <label htmlFor="email">Email address</label>
            <span>{errorState}</span>
            <input className={errorState.length ? 'errorState' : ''} style={errorState.length ? {borderColor:"tomato", color:"tomato"} : null} type="text" name="email" id="email" placeholder='email@company.com' value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="image-tag">
          {/* <img src={desktopImgSrc} alt="Desktop-image" /> */}
          <ResponsiveImage mobileImgSrc={mobileImgSrc} desktopImgSrc={desktopImgSrc}/>
        </div>
      </div> 
      </>}
    </>
  )
}
