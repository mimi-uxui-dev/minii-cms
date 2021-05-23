import React from 'react'

import logo from '../assets/img/logoHeader.png'
import playCircle from '../assets/img/play-circle.png'

function HeroSection() {
       return (

              <div className="hero">

                     <div className="navbar">
                            <img className="logo" src={logo} alt='' />
                            <div className="links">
                                   <a href="#">About</a>
                                   <a href="#">Services</a>
                                   <a href="#">Blog</a>
                                   <a href="#">Contact</a>
                            </div>
                     </div>

                     <div className='heroTxt'>
                            <p className='heroTxt_main'>Workspace that inspire</p>
                            <p className='heroTxt_sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                            <div className='heroTxt_innerContainer'>
                                   <a href="">
                                          <img src={playCircle} alt="" />
                                   </a>
                                   <div className='heroLine'></div>
                                   <p className='heroTxt_sub2'>DISCOVER</p>
                            </div>
                     </div>
              </div>
       )
}

export default HeroSection
