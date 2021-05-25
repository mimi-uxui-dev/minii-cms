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
