import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FAQS } from '../../sevices/globalServices'
import cookies from 'js-cookie'
import Header from '../Header'
import headerbg from '../../assets/img/breadcrumb_bkg.jpg'
import Collapsible from 'react-collapsible'
import img from '../../assets/img/Faqs/bg.svg'
import { useTranslation } from 'react-i18next'

function FaqsPage() {
     const { t } = useTranslation()

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
                                   <h3> {t('FQS_title')} </h3>
                                   <p> {t('FQS_para')} </p>
                              </div>

                              <div className='faqsGrid'>
                                   {
                                        faqs.map(faq => <div>
                                             <Collapsible trigger={cookies.get('i18next') === 'ar' ? faq.question__ar : (cookies.get('i18next') == 'fr' ? faq.question__fr : faq.question__en)}>
                                                  {cookies.get('i18next') === 'ar' ? faq.answer__ar : (cookies.get('i18next') == 'fr' ? faq.answer__fr : faq.answer__en)}
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
