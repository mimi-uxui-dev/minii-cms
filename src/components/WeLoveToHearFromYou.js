import React from 'react'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'


function WeLoveToHearFromYou({ companiesInfo }) {
     const { t } = useTranslation()

     return (
          <div className='WLTHFY_container'>
               <div className='WLTHFY_container_A'>
                    <h2> {t('CONTACT_Title')} </h2>
                    <p> {t('CONTACT_desc')}  </p>
               </div>

               <div className='WLTHFY_container_B'>

                    <div className='WLTHFY_container_B_sec1'>
                         <div>
                              <h6> {t('CONTACT_ourStore')} </h6>
                              <p>{cookies.get('i18next') === 'ar' ? companiesInfo.address__ar : (cookies.get('i18next') == 'fr' ? companiesInfo.address__fr : companiesInfo.address__en)}</p>
                         </div>

                         <div>
                              <h6>{t('CONTACT_contactInfo')}</h6>
                              <div>
                                   <p>{companiesInfo.phone}</p>
                                   <p>{companiesInfo.email}</p>
                              </div>
                         </div>
                    </div>

                    <div className='WLTHFY_container_B_sec2'>
                         <h6>{t('CONTACT_businessHours')}</h6>
                         <div>
                              <p>{t('CONTACT_monday_friday')}: <br /> <span>8am - 4pm</span>  </p>
                              <p>{t('CONTACT_saturday_sunday')}: <br /> <span>9am - 5pm</span>  </p>
                         </div>
                    </div>

               </div>

          </div>
     )
}

export default WeLoveToHearFromYou