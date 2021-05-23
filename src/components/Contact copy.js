import React, { useState, useEffect, useContext } from 'react'

import { MyContextProvider, MyContext } from '../context/MyContext'

import { useTranslation } from 'react-i18next'

import { CONTACT, CONTACT_POST } from '../sevices/globalServices'

import { toast } from 'react-toastify';

import tel from '../assets/img/Phone.svg'
import pin from '../assets/img/MapPin.svg'
import email1 from '../assets/img/Envelope.svg'
import mailBig from '../assets/img/icons/bigIcons/Envelope.svg'
import pinBig from '../assets/img/icons/bigIcons/MapPin.svg'
import phoneBig from '../assets/img/icons/bigIcons/Phone.svg'
import fruitsImg from '../assets/img/Contact/fruits.svg'
import lineOrange from '../assets/img/LineOrange.svg'
import axios from 'axios'
import cookies from 'js-cookie'

const Contact = ({ lang }) => {
     const { t } = useTranslation()

     const [companiesInfo, setCompaniesInfo] = useContext(MyContext)

     const [formErrors, setformErrors] = useState({
          nameErr: '',
          emailErr: '',
          phoneErr: '',
          subjectErr: '',
          messageErr: ''
     })

     const [contact, setContact] = useState([])

     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [subject, setSubject] = useState('')
     const [phone, setPhone] = useState('')
     const [message, setMessage] = useState('')

     useEffect(async () => {

          const fetchData = async () => {
               const result = await axios.get(CONTACT(1))
                    .then(res => setContact(res.data.data))
          }
          fetchData()

     }, [])


     const validateForm = () => {
          let nameErr = ''
          let emailErr = ''
          let phoneErr = ''
          let subjectErr = ''
          let messageErr = ''

          // Name Errors
          if (name.length < 3 || !name) {
               nameErr = 'Invalid Name'
          }

          // Email Errors
          if (!email.includes('@')) {
               emailErr = 'Invalid Email'
          }

          // Phone Errors
          if (phone.length < 10) {
               phoneErr = 'Invalid Phone: 10 or more characters'
          }

          // Subject Errors
          if (subject.length < 10) {
               subjectErr = 'Invalid Subject: 10 or more characters'
          }

          // Message Errors
          if (message.length < 144) {
               messageErr = 'Invalid Message: 144 or more characters'
          }


          if (emailErr || nameErr || phoneErr || subjectErr || messageErr) {
               setformErrors({ emailErr, nameErr, phoneErr, subjectErr, messageErr })
               return false
          }

          return true
     }

     const handleName = (e) => {
          e.preventDefault()
          setName(e.target.value)
     }

     const handleEmail = (e) => {
          e.preventDefault()
          setEmail(e.target.value)
     }

     const handlePhone = (e) => {
          e.preventDefault()
          setPhone(e.target.value)
     }

     const handleSubject = (e) => {
          e.preventDefault()
          setSubject(e.target.value)
     }

     const handleTxtarea = (e) => {
          e.preventDefault()
          setMessage(e.target.value)
     }

     const handleSubmit = async (e) => {
          e.preventDefault()

          const isValid = validateForm()

          if (isValid) {
               const dataToSubmit = {
                    name, email, subject, phone, message
               }

               console.log('dataToSubmit', dataToSubmit)

               const response = await axios.post(CONTACT_POST(), dataToSubmit)
               //.then(res => console.log('res from handleSubmit Contact', res))
               //.catch(error => console.log('err from handleSubmit Contact ', error.response))

               console.log('response :: ', response)

               if (response.status === 200) {
                    toast("Message sent with success ✔", {
                         position: toast.POSITION.TOP_CENTER
                    });
               } else {
                    toast.error("Sending message failed ❌", {
                         position: toast.POSITION.TOP_CENTER
                    });
               }

               // Reset stats of errors
               setformErrors({
                    nameErr: '',
                    emailErr: '',
                    phoneErr: '',
                    subjectErr: '',
                    messageErr: ''
               })
          }



     }


     return (
          <MyContextProvider>
               <div className="constactContainer" >

                    <div className='contactContainerTxt' >

                         {/* <p className='contactHeader'> {t('CONTACT_get_in_touch')} </p>
                              <p className='contactHeaderTxt'> {t('CONTACT_get_in_touch_para')} </p> */}

                         <div className='MainTitleContact'>
                              <p className='MainTitle0'>• CONTACT •</p>
                              <h1 className='MainTitle1' >Get in touch!</h1>
                              <img src={lineOrange} alt="" />

                         </div>

                         <div className="ci_infoCards">
                              <div className='ci_infoCard'>
                                   <img src={pinBig} alt="" />
                                   <p>{cookies.get('i18next') === 'ar' ? companiesInfo.address__ar : (cookies.get('i18next') == 'fr' ? companiesInfo.address__fr : companiesInfo.address__en)} </p>
                              </div>
                              <div className='ci_infoCard'>
                                   <img src={mailBig} alt="" />
                                   <p> {companiesInfo.email}</p>
                              </div>
                              <div className='ci_infoCard'>
                                   <img src={phoneBig} alt="" />
                                   <p> {companiesInfo.phone}</p>
                              </div>
                         </div>

                         <div className="">

                              <form className='contactForm' onSubmit={handleSubmit}>

                                   <div className="contactFormInnerContainer">

                                        <div className='formInputs'>

                                             <div>
                                                  <input
                                                       id='name'
                                                       type="text"
                                                       placeholder={t('CONTACT_PH_name')}
                                                       value={name}
                                                       onChange={handleName}

                                                  />
                                                  <div className='errorStyle'>{formErrors.nameErr}</div>
                                             </div>

                                             <div>

                                                  <input
                                                       id='email'
                                                       type="email"
                                                       placeholder={t('CONTACT_PH_email')}
                                                       value={email}
                                                       onChange={handleEmail}

                                                  />
                                                  <div className='errorStyle'>{formErrors.emailErr}</div>
                                             </div>


                                             <div>
                                                  <input
                                                       id='subject'
                                                       type="text"
                                                       placeholder={t('CONTACT_PH_subject')}
                                                       value={subject}
                                                       onChange={handleSubject}

                                                  />
                                                  <div className='errorStyle'>{formErrors.subjectErr}</div>
                                             </div>

                                             <div>
                                                  <input
                                                       id='phone'
                                                       type="text"
                                                       placeholder={t('CONTACT_PH_phone')}
                                                       value={phone}
                                                       onChange={handlePhone}

                                                  />
                                                  <div className='errorStyle'>{formErrors.phoneErr}</div>
                                             </div>
                                        </div>

                                        <div className='formTextArea' >
                                             <textarea
                                                  placeholder={t('CONTACT_PH_msg')}
                                                  id='message'
                                                  value={message}
                                                  onChange={handleTxtarea}

                                             />
                                             <div className='errorStyle'>{formErrors.messageErr}</div>
                                        </div>

                                   </div>

                                   <div className="contactFormInnerContainer_btn">
                                        <button
                                             className='contactBtn'
                                             onSubmit={handleSubmit}
                                             type='submit'> {t('CONTACT_send')} </button>
                                   </div>

                              </form>
                         </div>

                    </div>

               </div >
          </MyContextProvider>
     )
}

export default Contact
