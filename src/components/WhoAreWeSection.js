import React from 'react'
import rect_wrw1 from '../assets/img/rect_wrw1.png'
import rect_wrw2 from '../assets/img/rect_wrw2.png'

function WhoAreWeSection() {
       return (
              <div className='whoAreWe'>
                     <div className='whoAreWeInnerContainer'>
                            <div className='whoAreWeInnerContainer2'>
                                   <img src={rect_wrw1} alt='' />

                                   <div className='whoAreWeTXT wrwTop'>
                                          <p className='whoAreWeTXT_header'>Who Are We?</p>
                                          <p className='whoAreWeTXT_p' >A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                                          <p className='whoAreWeTXT_link'>Learn more</p>
                                   </div>
                            </div>
                            <div className='whoAreWeInnerContainer2' style={{ marginTop: '49px' }} >
                                   <div className='whoAreWeTXT wrwBottom'  >
                                          <p className='whoAreWeTXT_header'>Why Choose Us?</p>
                                          <p className='whoAreWeTXT_p' >A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                                          <p className='whoAreWeTXT_link'>Learn more</p>
                                   </div>
                                   <img src={rect_wrw2} alt='' />
                            </div>
                     </div>

              </div>
       )
}

export default WhoAreWeSection