
import React, { useState, useEffect } from 'react'
import axios from 'axios'


import { useTranslation } from 'react-i18next'

import { SERVICES } from '../sevices/globalServices'
import cookies from 'js-cookie'


import img1 from '../assets/img/01.png'
import img2 from '../assets/img/02.png'
import img3 from '../assets/img/03.png'
import img4 from '../assets/img/04.png'
import img5 from '../assets/img/05.png'
import img6 from '../assets/img/08.png'


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
                  <div className='wwoInnerContainerA'>
                        <p className='wwoTitle'>{t('SERVICE_What_We_Offer')}</p>
                        <p className='wwoPara'> {t('SERVICE_desc')} </p>
                  </div>

                  <div className='wwoInnerContainerB'>
                        {services.map(service => <div key={service.id}>
                              <img src={service.photo} alt="" />
                              <p className='wwoBTitle'> {cookies.get('i18next') === 'ar' ? service.name__ar : (cookies.get('i18next') == 'fr' ? service.name__fr : service.name__en)}</p>
                              <p className='wwoBPara'>{service.description__fr}</p>
                        </div>)}


                  </div>
            </div>
      )
}

export default WhatWeOffer
