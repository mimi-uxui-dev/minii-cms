import React from 'react'
import cookies from 'js-cookie'


function WeLoveToHearFromYou({ companiesInfo }) {

     return (
          <div className='WLTHFY_container'>
               <div className='WLTHFY_container_A'>
                    <h2>We Love to Hear From You</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
               </div>

               <div className='WLTHFY_container_B'>

                    <div className='WLTHFY_container_B_sec1'>
                         <div>
                              <h6>OUR STORE</h6>
                              <p>{cookies.get('i18next') === 'ar' ? companiesInfo.address__ar : (cookies.get('i18next') == 'fr' ? companiesInfo.address__fr : companiesInfo.address__en)}</p>
                         </div>

                         <div>
                              <h6>CONTACT INFORMATION</h6>
                              <div>
                                   <p>{companiesInfo.phone}</p>
                                   <p>{companiesInfo.email}</p>
                              </div>
                         </div>
                    </div>

                    <div className='WLTHFY_container_B_sec2'>
                         <h6>OUR BUSINESS HOURS</h6>
                         <div>
                              <p>Monday - Friday: <br /> <span>8am - 4pm</span>  </p>
                              <p>Saturday, Sunday: <br /> <span>9am - 5pm</span>  </p>
                         </div>
                    </div>

               </div>

          </div>
     )
}

export default WeLoveToHearFromYou