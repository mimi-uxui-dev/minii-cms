import React, { useState, useEffect } from 'react'
import search from '../assets/img/Navbar/bigMenu.svg'
import CloseBtn from '../assets/img/Products/XCircle.svg'
import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'
import { SEARCH } from '../sevices/globalServices'
import { Redirect, withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'



function Search() {
     const { t } = useTranslation()

     const [searchTerm, setSearchTerm] = useState('')
     const [selectedValue, setSelectedValue] = useState('')
     const [searchRes, setSearchRes] = useState([])

     const fetchData = async () => {
          const data = {
               table: selectedValue,
               term: searchTerm
          }
          const res = await axios.post(SEARCH(), data)

          setSearchRes(res.data)


     }

     const handleSubmit = async (e) => {
          e.preventDefault()

          setTimeout(() => fetchData(), 2000)


          setSelectedValue('')
          setSearchTerm('')

     }


     return (

          <>

               <form className='nav_navigation_search' onSubmit={handleSubmit} >
                    <img src={search} alt="" />
                    <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder={t('SEARCH_BTN_PLACEHOLDER')} required />

                    <select
                         className='searchSelect'
                         value={selectedValue}
                         onChange={e => setSelectedValue(e.target.value)}
                         required
                    >
                         <option value="">Select</option>
                         <option value="products">Products</option>
                         <option value="services">Services</option>
                         <option value="blogs">Blogs</option>
                    </select>

                    <button type="submit"> {t('SEARCH_BTN_LABEL')} </button>

                    {
                         searchRes.length > 0 && <Redirect to={{
                              pathname: '/results',
                              state: searchRes
                         }} />
                    }


               </form>



          </>

     )
}

export default withRouter(Search)
