import React from 'react'

const Articles = () => {
  return (
    <div className="articles-container">
        <div className="aricles-wrapper">
        <h2 className="articles-header">LATEST ARTICLES
        </h2>
        <div className="articles-box-container">
        <div className="articles-box first">
            <div className="articles-box-paragraph-container">
            <h5 className='articles-box-paragraph'>
            WEB2.0 VS WEB3.0
            </h5>
            <div className="articles-line"></div>
            </div>
            <div className="articles-box-image-wrapper">
                <a target="_blank" href="https://www.instagram.com/p/CkQLHu6rxex/"><img className='articles-image' src="https://static.wixstatic.com/media/ef0b8c_bb685b78acd44890b66345b9a606b072~mv2.jpg/v1/fill/w_656,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ef0b8c_bb685b78acd44890b66345b9a606b072~mv2.jpg" alt="web3 vs web2"/></a>
            <h2 className='articles-box-nums'>
                01
            </h2>
            </div>
        </div>
        <div className="articles-box second">
            <div className="articles-dots"></div>
            <div className="articles-box-image-wrapper">
            <h2 className='articles-box-nums'>
                02
            </h2>
                <a target="_blank" href="https://www.instagram.com/p/CkJd6x_LJ6H/"><img className='articles-image' src="https://static.wixstatic.com/media/ef0b8c_36c53090789f49ea9dba4641a0b76fe6~mv2.png/v1/fill/w_411,h_411,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ef0b8c_36c53090789f49ea9dba4641a0b76fe6~mv2.png" alt="web3 the new internet"/></a>
            </div>
            <div className="articles-box-paragraph-container">
            <div className="articles-line2"></div>
            <h5 className='articles-box-paragraph'>
            WEB3.O <span className='down'>THE NEW INTERNTET</span>
            </h5>
            </div>
        </div>
        <div className="articles-box third">
            <div className="articles-box-paragraph-container">
            <h5 className='articles-box-paragraph'>
            TOP 5 WOMEN <span className='down'>IN WEB3.0</span>
            </h5>
            <div className="articles-line"></div>
            </div>
            <div className="articles-box-image-wrapper">
                <a target="_blank" href="https://www.instagram.com/p/CkQLHu6rxex/"><img className='articles-image' src="https://static.wixstatic.com/media/ef0b8c_bf33ca48d9904ad28ad29bdccd9a6dcd~mv2.png/v1/fill/w_391,h_391,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ef0b8c_bf33ca48d9904ad28ad29bdccd9a6dcd~mv2.png" alt="top 5women in internet"/></a>
            <h2 className='articles-box-nums'>
                03
            </h2>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Articles