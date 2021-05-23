import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import fcb from '../assets/img/icons/FacebookLogo.svg'
import ig from '../assets/img/icons/InstagramLogo.svg'
import tw from '../assets/img/icons/TwitterLogo.svg'

import logo from '../assets/img/Navbar/L2.svg'

import search from '../assets/img/Navbar/bigMenu.svg'
import Translate from '../assets/img/Translate.svg'

import { useTranslation } from 'react-i18next'
import i18nex from 'i18next'

import { MyContextProvider, MyContext } from '../context/MyContext'

function Navbar({ languages }) {
     const { t } = useTranslation()

     const [companiesInfo, setCompaniesInfo] = useContext(MyContext)
     const [openMenu, setOpenMenu] = useState(false)

     const toggleOpen = () => {
          setOpenMenu(!openMenu)
          console.log('opppen', openMenu)
     }

     return (
          <>
               <div className='myNavBarContainer'>
                    <div className='myNavBar'>

                         <div className='nav_navigation'>

                              <form className='nav_navigation_search' >
                                   <img src={search} alt="" />
                                   <input type="text" placeholder='Search products..' />
                                   <button type="submit">Search</button>
                              </form>

                         </div>

                         <div className='logoContainer'>
                              <img src={logo} alt="" />
                         </div>

                         <div className='nav_sm'>

                              {/* Lang */}
                              <div className="d-flex">
                                   <div className="dropdown translateBtn">
                                        <button
                                             type="button"
                                             className="btn dropdown-toggle"
                                             id="dropdownMenuOffset"
                                             data-toggle="dropdown"
                                             aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                             <img src={Translate} alt="" />
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                             {
                                                  languages.map((lang) => (
                                                       <li key={lang.code}>
                                                            <button
                                                                 className='dropdown-item'
                                                                 onClick={() => i18nex.changeLanguage(lang.code)}
                                                            >
                                                                 {lang.name}
                                                            </button>
                                                       </li>
                                                  )
                                                  )}
                                        </div>
                                   </div>
                              </div>
                              {/* END Lang */}

                              <div className='nav_sm_links'>
                                   <a href={companiesInfo.facebook}><img src={fcb} alt="" /></a>
                                   <a href={companiesInfo.instagram}><img src={ig} alt="" /></a>
                                   <a href={companiesInfo.twitter}><img src={tw} alt="" /></a>
                              </div>
                         </div>
                    </div>

                    <div className='myNavBar_Links'>
                         <Link to='/' >Home</Link>
                         <Link to='/products' >Products</Link>
                         <Link to='/about-us' >About Us</Link>
                         <Link to='/blogs' >Blog</Link>
                         <Link to='/faqs' >FAQs</Link>
                         <Link to='/contact' >Contact</Link>
                    </div>
               </div>

               <div className='mobileMenu' >
                    <img src={logo} alt="" />

                    <div onClick={toggleOpen} className={openMenu ? 'MenuLineCross' : 'MenuLine'} ></div>
               </div>

               <div className={openMenu ? 'myNavBarContainerMobile toggleOpenClass' : 'myNavBarContainerMobile'} >
                    <div className='myNavBar'>
                         <div className='nav_navigation'>
                              <form className='nav_navigation_search' >
                                   <img src={search} alt="" />
                                   <input type="text" placeholder='Search products..' />
                                   <button type="submit">Search</button>
                              </form>
                         </div>
                         <div className='myNavBar_Links'>
                              <Link to='/' >Home</Link>
                              <Link to='/products' >Products</Link>
                              <Link to='/about-us' >About Us</Link>
                              <Link to='/blogs' >Blog</Link>
                              <Link to='/faqs' >FAQs</Link>
                              <Link to='/contact' >Contact</Link>
                         </div>

                         <div className='nav_sm'>

                              {/* Lang */}
                              <div className="d-flex">
                                   <div className="dropdown translateBtn">
                                        <button
                                             type="button"
                                             className="btn dropdown-toggle"
                                             id="dropdownMenuOffset"
                                             data-toggle="dropdown"
                                             aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                             <img src={Translate} alt="" />
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                             {
                                                  languages.map((lang) => (
                                                       <li key={lang.code}>
                                                            <button
                                                                 className='dropdown-item'
                                                                 onClick={() => i18nex.changeLanguage(lang.code)}
                                                            >
                                                                 {lang.name}
                                                            </button>
                                                       </li>
                                                  )
                                                  )}
                                        </div>
                                   </div>
                              </div>
                              {/* END Lang */}

                              <div className='nav_sm_links'>
                                   <a href={companiesInfo.facebook}><img src={fcb} alt="" /></a>
                                   <a href={companiesInfo.instagram}><img src={ig} alt="" /></a>
                                   <a href={companiesInfo.twitter}><img src={tw} alt="" /></a>
                              </div>
                         </div>
                    </div>


               </div>

          </>
     )
}

export default Navbar
