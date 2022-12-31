import React from 'react';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const SocialMediaSection = () => {
  return (
    <div className='social-media-container'>
        <a target="_blank" href="https://www.linkedin.com/company/web3-women-space/"><FaLinkedinIn style={{margin: "4px"}}/></a>
        <a target="_blank" href=""><AiOutlineTwitter style={{margin: "4px"}} /></a>
        <a target="_blank" href="https://t.me/web3women_geo"><FaTelegramPlane style={{margin: "4px"}} /></a>
        <a target="_blank" href="https://www.instagram.com/web3women.space/"><BsInstagram style={{margin: "4px"}}/></a>
    </div>
  )
}

export default SocialMediaSection