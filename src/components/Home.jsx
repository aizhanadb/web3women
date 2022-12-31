import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InfoSection from './InfoSection';
import SocialMediaSection from './SocialMediaSection';


const Home = () => {
  return (
    <div className='main-container'>
      <div className="holder">
        <header className='header-container'>
            <img className='image-w3w'
            src="https://static.wixstatic.com/media/ef0b8c_eb9b7e4a4c994e08a177bf4ab1f64e85~mv2.png/v1/fill/w_139,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled-2-01_edited.png" alt="Untitled-2-01_edited.png"/>
            <button className='btn-book-call'>Book a call</button>
            <InfoSection/>
        </header>
        </div>
        <div className="web3-container">
          <div className="circle3">
          <div className="circle2">
          <div className="circle1">
        <div web3-container>
          <div className="btn-container">
          <button className='btn-join-us'>Join Us</button>
          </div>
            <h1 className='web3'>WEB 3 <span className="space">SPACE</span></h1>
            <h1 className="women">WOMEN</h1>
            <p className='ge'>GEORGIA</p>
          </div>
        </div>
        </div>
        </div>
        </div>
      <div className="social-media-holder">
        {/* <div className="social-media-container"> */}
          {/* <SocialMediaSection/> */}
          {/* </div> */}
        </div>
    </div>
  )
}

export default Home;
