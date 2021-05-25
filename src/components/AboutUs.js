import React, { useContext } from 'react'
import cookies from 'js-cookie'
import Header from './Header'
import headerbg from '../assets/img/breadcrumb_bkg.jpg'
import img from '../assets/img/image1-h4.jpg'
import { MyContextProvider, MyContext } from '../context/MyContext'
import parse from 'html-react-parser'
import img001 from '../assets/img/Aboutus/img001.svg'
import img002 from '../assets/img/Aboutus/img002.svg'
import img003 from '../assets/img/Aboutus/img003.svg'

import i1 from '../assets/img/Aboutus/01.svg'
import i2 from '../assets/img/Aboutus/02.svg'
import i3 from '../assets/img/Aboutus/03.svg'
import i4 from '../assets/img/Aboutus/04.svg'
import i5 from '../assets/img/Aboutus/05.svg'
import i6 from '../assets/img/Aboutus/06.svg'

import a1 from '../assets/img/Aboutus/avatar-1.jpg'
import a2 from '../assets/img/Aboutus/avatar-2.jpg'

import mainImg from '../assets/img/Aboutus/mainImg.svg'
import Teams from './Teams/Teams'

import { useTranslation } from 'react-i18next'

function AboutUs() {
     const { t } = useTranslation()

     const [companiesInfo, setCompaniesInfo] = useContext(MyContext)

     return (
          <MyContextProvider>
               <Header pageTitle={'About Us'} pageCrumb={'About-us'} bg={headerbg} />

               <div className='AU_container'>
                    <img src={img} alt="" />

                    <div>
                         <h4> {t('AU_subTitle')} </h4>
                         <h3> {t('AU_Title')} </h3>
                         <p> {cookies.get('i18next') === 'ar' ? parse(`${companiesInfo.description__ar}`) : (cookies.get('i18next') == 'fr' ? parse(`${companiesInfo.description__fr}`) : parse(`${companiesInfo.description__en}`))} </p>
                    </div>
               </div>

               <div className='AU_Container02'>
                    <div>
                         <img src={img003} alt="" />
                         <h6> {t('AU_sec_title_01')} </h6>
                         <p> {t('AU_sec_para_01')} </p>
                    </div>

                    <div>
                         <img src={img002} alt="" />
                         <h6> {t('AU_sec_title_02')} </h6>
                         <p> {t('AU_sec_para_02')} </p>
                    </div>

                    <div>
                         <img src={img001} alt="" />
                         <h6> {t('AU_sec_title_03')} </h6>
                         <p> {t('AU_sec_para_03')} </p>
                    </div>
               </div>

               <div className="AU_Container03">
                    <h4> {t('AU_PROD_sec_subTitle')} </h4>
                    <h3> {t('AU_PROD_sec_Title')} </h3>

                    <div className='Au_containerinner'>

                         <div>
                              <div className='Au_01'>
                                   <img src={i1} alt="" />
                                   <div>
                                        <h6> {t('AU_PROD_sec_title01')} </h6>
                                        <p> {t('AU_PROD_sec_para01')} </p>
                                   </div>
                              </div>
                              <div className='Au_01'>
                                   <img src={i2} alt="" />
                                   <div>
                                        <h6> {t('AU_PROD_sec_title02')} </h6>
                                        <p> {t('AU_PROD_sec_para02')} </p>
                                   </div>
                              </div>
                              <div className='Au_01'>
                                   <img src={i3} alt="" />
                                   <div>
                                        <h6> {t('AU_PROD_sec_title03')} </h6>
                                        <p> {t('AU_PROD_sec_para03')} </p>
                                   </div>
                              </div>
                         </div>

                         <img className='mainImg' src={mainImg} alt="" />

                         <div>
                              <div className='Au_01'>
                                   <img src={i4} alt="" />
                                   <div>

                                        <h6> {t('AU_PROD_sec_title04')} </h6>
                                        <p> {t('AU_PROD_sec_para04')} </p>
                                   </div>
                              </div>
                              <div className='Au_01'>
                                   <img src={i5} alt="" />
                                   <div>

                                        <h6> {t('AU_PROD_sec_title05')} </h6>
                                        <p> {t('AU_PROD_sec_para05')} </p>
                                   </div>
                              </div>
                              <div className='Au_01'>
                                   <img src={i6} alt="" />
                                   <div>
                                        <h6> {t('AU_PROD_sec_title06')} </h6>
                                        <p> {t('AU_PROD_sec_para06')} </p>
                                   </div>
                              </div>
                         </div>

                    </div>


               </div>



               <div className="AU_Container05">
                    <Teams />
               </div>


          </MyContextProvider>
     )
}

export default AboutUs
