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


function AboutUs() {

     const [companiesInfo, setCompaniesInfo] = useContext(MyContext)

     return (
          <MyContextProvider>


               <Header pageTitle={'About Us'} pageCrumb={'About-us'} bg={headerbg} />

               <div className='AU_container'>
                    <img src={img} alt="" />

                    <div>
                         <h4>A Few Words About Us</h4>
                         <h3>A shop for good people <br /> by good people</h3>
                         <p> {cookies.get('i18next') === 'ar' ? parse(`${companiesInfo.description__ar}`) : (cookies.get('i18next') == 'fr' ? parse(`${companiesInfo.description__fr}`) : parse(`${companiesInfo.description__en}`))} </p>
                    </div>
               </div>

               <div className='AU_Container02'>
                    <div>
                         <img src={img003} alt="" />
                         <h6>Curated Products</h6>
                         <p>Choose from selected products from handpicked sellers.</p>
                    </div>

                    <div>
                         <img src={img002} alt="" />
                         <h6>Handmade & Organic</h6>
                         <p>Made with passion by 300+ curators across the country.</p>
                    </div>

                    <div>
                         <img src={img001} alt="" />
                         <h6>100% Natural</h6>
                         <p>Eat local, consume local,
closer to nature.</p>
                    </div>

               </div>

               <div className="AU_Container03">
                    <h4>Our Products</h4>
                    <h3>Highest Quality</h3>

                    <div className='Au_containerinner'>

                         <div>
                              <div className='Au_01'>
                                   <img src={i1} alt="" />
                                   <div>

                                        <h6>Handmade</h6>
                                        <p>Made with passion by 300+ curators across the country.</p>
                                   </div>
                              </div>
                              <div className='Au_01'>
                                   <img src={i2} alt="" />
                                   <div>

                                        <h6>100% Natural</h6>
                                        <p>Eat local, consume local, closer to nature.</p>
                                   </div>
                              </div>
                              <div className='Au_01'>
                                   <img src={i3} alt="" />
                                   <div>

                                        <h6>Curated Products</h6>
                                        <p>Eat local, consume local, closer to nature.</p>
                                   </div>
                              </div>
                         </div>

                         <img className='mainImg' src={mainImg} alt="" />

                         <div>
                              <div className='Au_01'>
                                   <img src={i4} alt="" />
                                   <div>

                                        <h6>Modern Farm</h6>
                                        <p>Made with passion by 300+ curators across the country.</p>
                                   </div>
                              </div>
                              <div className='Au_01'>
                                   <img src={i5} alt="" />
                                   <div>

                                        <h6>Alway Fresh</h6>
                                        <p>Eat local, consume local, closer to nature.</p>
                                   </div>
                              </div>
                              <div className='Au_01'>
                                   <img src={i6} alt="" />
                                   <div>

                                        <h6>Sustainable</h6>
                                        <p>Chemical free consumption IN and ON your body.</p>
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
