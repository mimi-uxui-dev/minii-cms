
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useTranslation } from 'react-i18next'

import { SERVICE_LIMIT } from '../sevices/globalServices'
import cookies from 'js-cookie'
import lineGreenish from '../assets/img/Vector 5.svg'


import parse from 'html-react-parser'

function WhatWeOffer({ lang }) {

      const { t } = useTranslation()

      const [services, setServices] = useState([])

      useEffect(async () => {
            const fetchData = async () => {
                  const result = await axios.get(SERVICE_LIMIT())
                        .then(res => setServices(res.data.data))
            }
            fetchData()
      }, [])

      return (
            <div className="wwoContainer">
                  <div className='MainTitle'>
                        <p className='MainTitle0'>• {t('SERVICE_TAG')} •</p>
                        <h1 className='MainTitle1' >{t('SERVICE_What_We_Offer')}</h1>
                        <img style={{ width: '70px' }} src={lineGreenish} alt="" />
                        <p className='MainTitle0wwo'> {t('SERVICE_desc')} </p>

                  </div>

                  <div className='wwo2Grid' >

                        {
                              services.length == 0 ? 'loading ..' :
                                    services.map(s => <div key={s.id} className='wwo2Grid_'>
                                          <img className='wwo2Grid_Img' src={s.photo} alt="" />
                                          <p className='wwo2Grid_title'>{cookies.get('i18next') === 'ar' ? s.name__ar : (cookies.get('i18next') == 'fr' ? s.name__fr : s.name__en)}</p>
                                          <img className='wwo2Grid_line' src={lineGreenish} alt="" />
                                          <p className='wwo2Grid_desc'> {cookies.get('i18next') === 'ar' ? parse(`${s.description__ar}`) : (cookies.get('i18next') == 'fr' ? parse(`${s.description__fr}`) : parse(`${s.description__en}`))}  </p>
                                    </div>)
                        }

                        {/* <div className='wwo2Grid_'>
                              <img className='wwo2Grid_Img' src='https://i.ibb.co/YbrpQFk/Group-26.jpg' alt="" />
                              <p className='wwo2Grid_title'>Organic Stuff</p>
                              <img src={lineGreenish} alt="" />
                              <p className='wwo2Grid_desc'>  Sed suscipit quis ornare sem molestie. Sed suscipit sollicitudin nullantum odio. Quisque ullamcorper, suscipit sollicitudin nullantum odio </p>
                        </div>

                        <div className='wwo2Grid_'>
                              <img className='wwo2Grid_Img' src='https://i.ibb.co/ctP7rbp/Group-27.jpg' alt="" />
                              <p className='wwo2Grid_title'>Organic Stuff</p>
                              <img src={lineGreenish} alt="" />
                              <p className='wwo2Grid_desc'>  Sed suscipit quis ornare sem molestie. Sed suscipit sollicitudin nullantum odio. Quisque ullamcorper, suscipit sollicitudin nullantum odio </p>
                        </div>

                        <div className='wwo2Grid_'>
                              <img className='wwo2Grid_Img' src='https://i.ibb.co/QQZ1S1s/Group-28.jpg' alt="" />
                              <p className='wwo2Grid_title'>Organic Stuff</p>
                              <img src={lineGreenish} alt="" />
                              <p className='wwo2Grid_desc'>  Sed suscipit quis ornare sem molestie. Sed suscipit sollicitudin nullantum odio. Quisque ullamcorper, suscipit sollicitudin nullantum odio </p>
                        </div>

                        <div className='wwo2Grid_'>
                              <img className='wwo2Grid_Img' src='https://i.ibb.co/VVdbtdw/Group-29.jpg' alt="" />
                              <p className='wwo2Grid_title'>Organic Stuff</p>
                              <img src={lineGreenish} alt="" />
                              <p className='wwo2Grid_desc'>  Sed suscipit quis ornare sem molestie. Sed suscipit sollicitudin nullantum odio. Quisque ullamcorper, suscipit sollicitudin nullantum odio </p>
                        </div>

                        <div className='wwo2Grid_'>
                              <img className='wwo2Grid_Img' src='https://i.ibb.co/wd1qrZk/Group-30.jpg' alt="" />
                              <p className='wwo2Grid_title'>Organic Stuff</p>
                              <img src={lineGreenish} alt="" />
                              <p className='wwo2Grid_desc'>  Sed suscipit quis ornare sem molestie. Sed suscipit sollicitudin nullantum odio. Quisque ullamcorper, suscipit sollicitudin nullantum odio </p>
                        </div>

                        <div className='wwo2Grid_'>
                              <img className='wwo2Grid_Img' src='https://i.ibb.co/8gjdQVv/Group-31.jpg' alt="" />
                              <p className='wwo2Grid_title'>Organic Stuff</p>
                              <img src={lineGreenish} alt="" />
                              <p className='wwo2Grid_desc'>  Sed suscipit quis ornare sem molestie. Sed suscipit sollicitudin nullantum odio. Quisque ullamcorper, suscipit sollicitudin nullantum odio </p>
                        </div> */}

                  </div>
            </div>
      )
}

export default WhatWeOffer
