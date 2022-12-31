import React from 'react';
import { BsInstagram } from 'react-icons/bs';

const InstSection = () => {
  return (
    <div className='in-section-container'>
      <div className="in-section-follow-wrapper">
      <p className='in-section-women-space'>web3women.space</p>
      <button className="in-section-follow">
        <BsInstagram/> <span>Follow</span>
      </button>
      </div>

    </div>
  )
}

export default InstSection