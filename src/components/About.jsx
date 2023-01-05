import React from 'react';

const About = () => {
  return (
    <div className="stats-container" id="about">
      <div className='stats-header-container'>
        <h3 className='stats-header'>THIS IS THE FUTURE</h3>
        <h3 className='stats-header'>WE DARE TO BUILD TOGETHER</h3>
        <p>LET'S GET MORE WOMEN INTO SPACE</p>
    </div>
    <div className="stats-info-container">
      <div className="stats-info">
      <h2 className='stats-numbers'>438</h2>
      <p className='stats-text'>Web 3.0 companies have raised over $4.5 billion in funding</p>
      </div>
      <div className="stats-info">
      <h2 className='stats-numbers'>8%</h2>
      <p className='stats-text'>Only 8% of women have heard about Web3.0
      We are here to change it!</p>
      </div>
      <div className="stats-info">
      <h2 className='stats-numbers'>81%</h2>
      <p className='stats-text'>of consumers who have heard about Web 3.0 think that it will improve their wellbeing.</p>
      </div>
    </div>
    </div>
    
  )
}

export default About;