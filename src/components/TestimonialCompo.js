import React from 'react'
import Slider from "react-slick"

function TestimonialCompo() {
     var slider_settings = {
          dots: true,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 2500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
     };
     return (
          <div>
               <div className="AU_Container04">

                    <Slider {...slider_settings}>

                         <div className='AU_slideContent'>
                              <img src={a1} alt="" className='AU_slideImg' />
                              <p className='AU_slideTxt'>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolores
                              perspiciatis laborum incidunt vel. amet consectetur adipisicing elit.”</p>
                              <p className='AU_slideName'>Jane Doe - Designer</p>
                         </div>


                         <div className='AU_slideContent'>
                              <img src={a2} alt="" className='AU_slideImg' />
                              <p className='AU_slideTxt'>“Nisi dolores
                              perspiciatis laborum? Numquam exercitationem tempora explicabo veritatis ex sint fuga officiis
                                reiciendis aliquam culpa itaque amet praesentium neque, incidunt vel.”</p>
                              <p className='AU_slideName'>John Doe - Designer</p>
                         </div>


                    </Slider>
               </div>
          </div>
     )
}

export default TestimonialCompo
