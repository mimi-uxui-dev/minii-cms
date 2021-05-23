import React from 'react'
import cookies from 'js-cookie'

function Faq({ faq }) {
     return (
          <div className='FaqContainer'>
               <p className='FaqQuestion' > {cookies.get('i18next') === 'ar' ? faq.question__ar : (cookies.get('i18next') == 'fr' ? faq.question__fr : faq.question__en)} </p>
               <p className='FaqAnswer'>
                    {cookies.get('i18next') === 'ar' ? faq.answer__ar : (cookies.get('i18next') == 'fr' ? faq.answer__fr : faq.answer__en)}
               </p>
          </div>
     )
}

export default Faq
