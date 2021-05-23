import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FAQS } from '../../sevices/globalServices'
import cookies from 'js-cookie'
import lineGreenish from '../../assets/img/Vector 5.svg'
import Header from '../Header'
import headerbg from '../../assets/img/breadcrumb_bkg.jpg'
import Collapsible from 'react-collapsible'
import img from '../../assets/img/Faqs/bg.svg'

function FaqsPage() {

     const [faqs, setFaqs] = useState([])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(FAQS())
                    .then(res => setFaqs(res.data.data))
          }
          fetchData()
     }, [])

     return (
          <div>
               <Header pageTitle={'FAQs'} pageCrumb={'FAQs'} bg={headerbg} />
               <div className="faqsContainer">


                    <div className='faqsContainer_grid'>
                         <img src={img} alt="" />

                         <div>
                              <div class='faqsHeader'>
                                   <h3>Welcome, how can we help you?</h3>
                                   <p>We warrant that your information including the sensitive information submitted by you is protected both online and off-line. While you are making the payment, the page is secure, encrypted and protected with the best encryption software in the industry – SSL. You can choose one favorite from the payment methods below.</p>
                              </div>

                              <div className='faqsGrid'>

                                   {
                                        faqs.map(faq => <div>
                                             <Collapsible trigger={faq.question__en}>
                                                  {faq.answer__en}
                                             </Collapsible>
                                             <hr />
                                        </div>
                                        )
                                   }
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default FaqsPage
