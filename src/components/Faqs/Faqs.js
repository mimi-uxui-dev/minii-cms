import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FAQS } from '../../sevices/globalServices'
import Faq from './Faq'


import PropTypes from 'prop-types'
import cookies from 'js-cookie'
import { Tabs } from "@feuer/react-tabs";
import lineGreenish from '../../assets/img/Vector 5.svg'

function Faqs() {

     const [faqs, setFaqs] = useState([])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(FAQS())
                    .then(res => setFaqs(res.data.data))
          }
          fetchData()
     }, [])



     return (
          <div className="faqsContainer">

               <div className='MainTitle'>
                    <p className='MainTitle0'>• FAQS •</p>
                    <h1 className='MainTitle1' >Have any questions?</h1>
                    <img src={lineGreenish} alt="" />

               </div>

               <div className='faqsContainer_grid'>
                    {
                         faqs.map(faq => <Faq key={faq.id} faq={faq} />)
                    }
               </div>

          </div>
     )
}

/* Tabs.propTypes = {
     activeTab: PropTypes.any.isRequired
}
 */
export default Faqs
