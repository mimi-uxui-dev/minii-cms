import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { SLIDERS } from '../sevices/globalServices'
import cookies from 'js-cookie'

import Slider from "react-slick";

import spinner from '../assets/img/spinner.svg'


function SliderComponent() {


     var slider_settings = {
          dots: false,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
     };

     const [sliders, setSliders] = useState([])

     useEffect(async () => {

          const fetchData = async () => {
               const result = await axios.get(SLIDERS())
                    .then(res => setSliders(res.data.data))

          }
          fetchData()

     }, [])

     const imgs = [
          'https://i.ibb.co/z2W7BZv/02.jpg',
          'https://i.ibb.co/ZcvrxQv/01.jpg'
     ]

     const phrases = ['Live healthy', 'New This Week', 'Green Life, Best Life']


     return (
          <div>
               {
                    sliders.length == 0 ?
                         <img src={spinner} className='spinner' alt="" />

                         :
                         <Slider className='mainSlider' style={{ width: '68%', margin: '0 auto' }} {...slider_settings}>
                              {/*  {
                                   sliders.map(slider =>
                                        <div key={slider.id} className="section">
                                             <img src={slider.photo} alt="" style={{ maxWidth: '100%', width: '100%', height: '-webkit-fill-available', objectFit: 'cover' }} />

                                             <div className='sliderTxt '>
                                                  <p className='sliderAboveHeader' >{phrases[Math.floor(Math.random() * phrases.length)]}</p>
                                                  <p className="sliderHeader">{cookies.get('i18next') === 'ar' ? slider.title__ar : (cookies.get('i18next') == 'fr' ? slider.title__fr : slider.title__en)} </p>
                                                  <p className="sliderContent" dangerouslySetInnerHTML={{ __html: cookies.get('i18next') === 'ar' ? slider.description__ar : (cookies.get('i18next') == 'fr' ? slider.description__fr : slider.description__en) }} ></p>
                                                  <Link className='sliderCTA' to={'/products'}>Shop now »</Link>
                                             </div>
                                        </div>
                                   )
                              } */}


                              <div key={slider.id} className="section">
                                   <img src='https://i.ibb.co/T0Db7t3/02.jpg' alt="" style={{ maxWidth: '100%', width: '100%', height: '-webkit-fill-available', objectFit: 'cover' }} />

                                   <div className='sliderTxt '>
                                        <p className='sliderAboveHeader' >New this Week</p>
                                        <p className="sliderHeader">Long Life, Healthy Style</p>
                                        <p className="sliderContent">It is a long established fact that a reader will be amazed.</p>
                                        <Link className='sliderCTA' to={'/products'}>Shop now »</Link>
                                   </div>
                              </div>

                              <div key={slider.id} className="section">
                                   <img src='https://i.ibb.co/T0Db7t3/02.jpg' alt="" style={{ maxWidth: '100%', width: '100%', height: '-webkit-fill-available', objectFit: 'cover' }} />

                                   <div className='sliderTxt '>
                                        <p className='sliderAboveHeader' >New this Week</p>
                                        <p className="sliderHeader">Long Life, Healthy Style</p>
                                        <p className="sliderContent">It is a long established fact that a reader will be amazed.</p>
                                        <Link className='sliderCTA' to={'/products'}>Shop now »</Link>
                                   </div>
                              </div>

                         </Slider>
               }
          </div>
     )
}

export default SliderComponent
