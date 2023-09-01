import React from 'react';
import './thankyou.css';
import Lock from '../assets/Group 174.png';

function ThankYou() {
  return (
    <div className='container background-image'>
     <h2 className='heading-content'>Thanks for participating!</h2>
      <p className='sub-content'>Our teams's here to help you learn more about our network.</p>
      <h3 className='prize-content'>P.s: Don't leave without your prize!</h3>
      <img src={Lock} alt='lock' className='lock-img' />
    </div>
  )
}

export default ThankYou
