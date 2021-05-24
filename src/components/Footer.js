import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { SUBSCRIBE, PRODUCTS_CA } from '../sevices/globalServices'
import { MyContextProvider, MyContext } from '../context/MyContext'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { toast } from 'react-toastify';

import fcb from '../assets/img/Footer/FacebookLogo.svg'
import gmail from '../assets/img/Footer/GoogleLogo.svg'
import ig from '../assets/img/Footer/InstagramLogo.svg'
import tw from '../assets/img/Footer/TwitterLogo.svg'
import headset from '../assets/img/headset.png'
import { Link } from 'react-router-dom'


function Footer() {

     const [companiesInfo, setCompaniesInfo] = useContext(MyContext)
     const [productsCateg, setProductsCateg] = useState([])

     const [formErrors, setformErrors] = useState({
          emailErr: '',
     })

     const validateForm = () => {

          let emailErr = ''

          // Email Errors
          if (!email.includes('@')) {
               emailErr = 'Invalid Email'
          }


          if (emailErr) {
               setformErrors({ emailErr })
               return false
          }

          return true
     }

     useEffect(async () => {

          const fetchData = async () => {
               const result = await axios.get(PRODUCTS_CA())
                    .then(res => setCompaniesInfo(res.data.data))

          }
          fetchData()

     }, [])

     const [email, setEmail] = useState('')

     const handleEmail = (e) => {
          e.preventDefault()
          setEmail(e.target.value)
     }

     console.log('categoriesssssss', productsCateg)

     const handleSubmit = async (e) => {
          e.preventDefault()

          const isValid = validateForm()

          if (isValid) {
               const dataToSubmit = { email }

               console.log('dataToSubmit', dataToSubmit)

               const response = await axios.post(SUBSCRIBE(), dataToSubmit)
               //.then(res => console.log('res from handleSubmit Contact', res))
               //.catch(error => console.log('err from handleSubmit Contact ', error.response))


               if (response.status === 200) {
                    toast("Subscription with success ✔", {
                         position: toast.POSITION.TOP_CENTER
                    });
               } else {
                    toast.error("failed ❌", {
                         position: toast.POSITION.TOP_CENTER
                    });
               }

               // Reset stats of errors
               setformErrors({
                    emailErr: '',
               })
          }



     }

     return (
          <div className='Footer01'>
               <div className="footer_row01">
                    <div className='footer_callus'>
                         <img src={headset} alt="" />
                         <div>
                              <p className='title'>CALL US 24/7</p>
                              <p className='number'>{companiesInfo.phone}</p>
                         </div>
                    </div>
                    <div className="footer_sm">
                         <p>FOLLOW US</p>
                         <div>
                              <a href={companiesInfo.facebook}><img src={fcb} alt="" /></a>
                              <a href={companiesInfo.email}><img src={gmail} alt="" /></a>
                              <a href={companiesInfo.instagram}><img src={ig} alt="" /></a>
                              <a href={companiesInfo.twitter}><img src={tw} alt="" /></a>
                         </div>
                    </div>
               </div>

               <div className='footer_row02 '>
                    <div className='footer_sec footer_sec01'>
                         <p>STORE LOCATION</p>
                         <ul>
                              <li>{cookies.get('i18next') === 'ar' ? companiesInfo.address__ar : (cookies.get('i18next') == 'fr' ? companiesInfo.address__fr : companiesInfo.address__en)} </li>
                              <li><p></p></li>
                              <li>{companiesInfo.email}</li>
                         </ul>
                    </div>

                    <div className='footer_sec'>
                         <p>INFORMATION</p>
                         <ul>
                              <li><a href="">About us</a></li>
                              <li><a href="">Blog</a></li>
                              <li><a href="">Contact</a></li>
                              <li><a href="">Service</a></li>
                         </ul>
                    </div>

                    <div className='footer_sec'>
                         <p>CATEGORIES</p>
                         <ul>
                              {productsCateg.map(c => <li> <Link>{cookies.get('i18next') === 'ar' ? c.name__ar : (cookies.get('i18next') == 'fr' ? c.name__fr : c.name__en)}</Link> </li>)}


                         </ul>
                    </div>

                    <div className='footer_sec'>
                         <p>SUBSCRIBE US</p>

                         <p className='footer_subscribe_txt'>Sign up and get all our exclusive news.</p>
                         <form onSubmit={handleSubmit}>
                              <input
                                   value={email}
                                   onChange={handleEmail}
                                   type="email"
                                   name='email'
                                   required
                                   placeholder='Email address...'
                              />
                              <button type="submit"> → </button>
                              <br />
                              <div className='errorStyle'>{formErrors.emailErr}</div>

                         </form>
                    </div>
               </div>

               <div className="footer_row03">
                    <p>Copyright © 2021 <a href="">Light Services</a>. All Rights Reserved.</p>
               </div>
          </div>
     )
}

export default Footer