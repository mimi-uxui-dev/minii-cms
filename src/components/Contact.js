import React, { useState, useEffect, useContext } from 'react'
import { MyContextProvider, MyContext } from '../context/MyContext'
import { useTranslation } from 'react-i18next'
import { CONTACT, CONTACT_POST } from '../sevices/globalServices'
import { toast } from 'react-toastify';
import axios from 'axios'
import cookies from 'js-cookie'
import contact1 from '../assets/img/Contact/contact1.jpg'
import Header from './Header'
import WeLoveToHearFromYou from './WeLoveToHearFromYou'


import headerbg from '../assets/img/breadcrumb_bkg.jpg'

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


     const validateForm = () => {
          let nameErr = ''
          let emailErr = ''
          let phoneErr = ''
          let subjectErr = ''
          let messageErr = ''

          // Name Errors
          if (name.length < 3 || !name) {
               nameErr = cookies.get('i18next') === 'ar' ? "اسم غير صالح: أكثر من 3 أحرف من فضلك" : (cookies.get('i18next') == 'fr' ? "Nom invalide: plus de 3 caractères s'il vous plaît" : "Name Invalid: more than 3 characters please")
          }

          // Email Errors
          if (!email.includes('@')) {
               emailErr = cookies.get('i18next') === 'ar' ? "البريد الإلكتروني غير صحيح" : (cookies.get('i18next') == 'fr' ? "Email invalide" : "Email Invalid")
          }

          // Phone Errors
          if (phone.length < 10) {
               phoneErr = cookies.get('i18next') === 'ar' ? "رقم الهاتف غير صالح: 10 أحرف أو أكثر" : (cookies.get('i18next') == 'fr' ? "Téléphone non valide: 10 caractères ou plus" : 'Invalid Phone: 10 or more characters')
          }

          // Subject Errors
          if (subject.length < 10) {
               subjectErr = cookies.get('i18next') === 'ar' ? "10 أو أكثر من الأحرف" : (cookies.get('i18next') == 'fr' ? "10 caractères ou plus" : '10 or more characters')
          }

          // Message Errors
          if (message.length < 144) {
               messageErr = cookies.get('i18next') === 'ar' ? "144 حرفًا أو أكثر" : (cookies.get('i18next') == 'fr' ? "144 caractères ou plus" : '144 or more characters')
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

               toast(t('TOASTER_CONTACT_msgIsBeingSent'), {
                    position: toast.POSITION.TOP_CENTER
               });

               const response = await axios.post(CONTACT_POST(), dataToSubmit)

               console.log('response :: ', response)

               if (response.status === 200) {
                    toast(t('TOASTER_CONTACT_success'), {
                         position: toast.POSITION.TOP_CENTER
                    });
               } else {
                    toast.error(t('TOASTER_CONTACT_failure'), {
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
               <Header pageTitle={'Contact Us'} pageCrumb={'Contact Us'} bg={headerbg} />

               <div className="constactContainer" >
                    <div className="contactContainer_sideIMG">
                         <img src={contact1} alt="" style={{ width: '100%' }} />
                    </div>

                    <div className='contactContainerTxt' >

                         <WeLoveToHearFromYou companiesInfo={companiesInfo} />

                         <hr />

                         <form className='contactForm' onSubmit={handleSubmit}>

                              <div className="contactFormInnerContainer">
                                   <h3> {t('CONTACT_LeaveAMsg')} </h3>
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

               </div >
          </MyContextProvider>
     )
}

export default Contact
