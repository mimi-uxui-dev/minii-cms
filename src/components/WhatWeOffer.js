
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useTranslation } from 'react-i18next'

import { SERVICES } from '../sevices/globalServices'
import cookies from 'js-cookie'
import lineGreenish from '../assets/img/Vector 5.svg'


import parse from 'html-react-parser'

function WhatWeOffer({ lang }) {

      const { t } = useTranslation()

      const [services, setServices] = useState([])

      useEffect(async () => {
            const fetchData = async () => {
                  const result = await axios.get(SERVICES())
                        .then(res => setServices(res.data.data))
            }
            fetchData()
      }, [])

      return (
            <div className="wwoContainer">
                  <div className='MainTitle'>
                        <p className='MainTitle0'>• SERVICES •</p>
                        <h1 className='MainTitle1' >What We Offer</h1>
                        <img src={lineGreenish} alt="" />
                        <p className='MainTitle0wwo'>Lonsectetur, quis ornare sem molestie. Sed suscipit sollicitudin nullantum odio. Quisque ullamcorper.</p>

                  </div>

                  <div className='wwo2Grid' >

                        {
                              services.map(s => <div className='wwo2Grid_'>
                                    <img className='wwo2Grid_Img' src={s.photo} alt="" />
                                    <p className='wwo2Grid_title'>{cookies.get('i18next') === 'ar' ? s.name__ar : (cookies.get('i18next') == 'fr' ? s.name__fr : s.name__en)}</p>
                                    <img src={lineGreenish} alt="" />
                                    <p className='wwo2Grid_desc'> {cookies.get('i18next') === 'ar' ? parse(`${s.description__ar}`) : (cookies.get('i18next') == 'fr' ? parse(`${s.description__fr}`) : parse(`${s.description__en}`))}  </p>
                              </div>)
                        }



                  </div>
            </div>
      )
}

export default WhatWeOffer
