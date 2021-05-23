import spinner from '../assets/img/spinner.svg'
import React, { useState, useEffect } from 'react'
import { PARTNERS } from '../sevices/globalServices'
import axios from 'axios'
import Slider from "react-slick";

function Partners() {

     const [partners, setPartners] = useState([])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(PARTNERS())
                    .then(res => setPartners(res.data.data))
          }
          fetchData()
     }, [])

     var settings = {
          dots: false,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 1500,
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 4,
                         slidesToScroll: 4
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3
                    }
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3
                    }
               }
          ]
     };

     console.log(partners)

     return (
          <div id='partnersCotainer'>
               <div className='partnersCotainerLine'></div>

               <div className='partenersSlide'>
                    <Slider {...settings}>
                         {
                              partners.length == 0 ? <img src={spinner} alt="" /> : partners.map(p => <div key={p.id} className='PartnersCard'>
                                   <img src={p.photo} alt="" />
                              </div>)
                         }
                    </Slider>
               </div>
               <div className='partnersCotainerLine'></div>
          </div>
     )
}

export default Partners