import React from 'react'
import logo from '../assets/img/Footer/Light.svg'
import fcb from '../assets/img/Footer/FacebookLogo.svg'
import gmail from '../assets/img/Footer/GoogleLogo.svg'
import ig from '../assets/img/Footer/InstagramLogo.svg'
import tw from '../assets/img/Footer/TwitterLogo.svg'


function Footer() {
     return (
          <div className='Footer'>
               <div className='footer_sec1'>
                    <a href=""><img src={logo} alt="" /></a>

                    <p>Copyright © 2020 My Company XYZ. <br /> All rights reserved</p>

                    <div>
                         <a href=""><img src={fcb} alt="" /></a>
                         <a href=""><img src={gmail} alt="" /></a>
                         <a href=""><img src={ig} alt="" /></a>
                         <a href=""><img src={tw} alt="" /></a>
                    </div>
               </div>

               <div className='footer_sec2'>
                    <p>Company</p>
                    <ul>
                         <li><a href="">Link 1</a></li>
                         <li><a href="">Link 2</a></li>
                         <li><a href="">Link 3</a></li>
                         <li><a href="">Link 4</a></li>
                    </ul>
               </div>

               <div className='footer_sec3'>
                    <p>Support</p>
                    <ul>
                         <li><a href="">Link 1</a></li>
                         <li><a href="">Link 2</a></li>
                         <li><a href="">Link 3</a></li>
                         <li><a href="">Link 4</a></li>
                    </ul>
               </div>

               <div className='footer_sec3'>
                    <p>Usefull</p>
                    <ul>
                         <li><a href="">Link 1</a></li>
                         <li><a href="">Link 2</a></li>
                         <li><a href="">Link 3</a></li>
                         <li><a href="">Link 4</a></li>
                    </ul>
               </div>



          </div>
     )
}

export default Footer
