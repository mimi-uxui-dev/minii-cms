import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogsPageComponent from './BlogsPageComponent'
import pc from '../../assets/img/Blogs/pc.png'
import pen from '../../assets/img/Blogs/Pen.svg'
import clock from '../../assets/img/Blogs/Clock.svg'
import Header from '../Header'
import parse from 'html-react-parser'

import CloseBtn from '../../assets/img/Products/XCircle.svg'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

import { BLOG_EXCEPT, BLOG_LAST } from '../../sevices/globalServices'
import headerbg from '../../assets/img/breadcrumb_bkg.jpg'
import axios from 'axios'
import Modal from 'react-modal'
import moment from 'moment'

const customStyles = {
     content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'

     }
};

function BlogsPage() {

     const [blogs, setBlogs] = useState([])
     const [blogsLast, setBlogsLast] = useState([])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(BLOG_EXCEPT())
                    .then(res => setBlogs(res.data.data))
          }
          fetchData()
     }, [])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(BLOG_LAST())
                    .then(res => setBlogsLast(res.data.data))
          }
          fetchData()
     }, [])

     const [modalIsOpen, setIsOpen] = useState(false);

     function openModal() {
          setIsOpen(true);
     }
     function closeModal() {
          setIsOpen(false);
     }


     return (
          <div className='BlogsPageMain'>

               <Header pageTitle={'Our Blog'} pageCrumb={'Blog'} bg={headerbg} />

               <div className='blogsPageMainCompo'>

                    <Modal isOpen={modalIsOpen}>

                         <img className='closeBtnModal' onClick={closeModal} src={CloseBtn} alt="" />

                         <div className='blogModalContent'>

                              <img className='blogModalimg' src={blogsLast.photo} alt="" />

                              <div className='blogModalTXT'>
                                   <div>
                                        <p className='blogsPageCompCategory'>in<span> {blogsLast.domaine}</span></p>
                                        <div><img src={pen} alt="" /><span> Admin </span> </div>
                                        <div><img src={clock} alt="" /><span> {moment(blogsLast.updated_at).format('DD/MM/YYYY')}  </span> </div>
                                   </div>
                                   <p className='blogsPageCompTitle' onClick={openModal} >{cookies.get('i18next') === 'ar' ? blogsLast.title__ar : (cookies.get('i18next') == 'fr' ? blogsLast.title__fr : blogsLast.title__en)}</p>
                                   <p className='blogsPageCompPara'>
                                        {cookies.get('i18next') === 'ar' ? parse(`${blogsLast.text__ar}`) : (cookies.get('i18next') == 'fr' ? parse(`${blogsLast.text__fr}`) : parse(`${blogsLast.text__en}`))}
                                   </p>
                              </div>

                         </div>
                    </Modal>

                    <img className='blogsPageCompImg_single' src={blogsLast.photo} alt="" />

                    <div className='blogsPageMainCompoTxt'>
                         <p className='blogsPageCompCategory'>in<span> {blogsLast.domaine} </span></p>
                         <p className='blogsPageCompTitle' onClick={openModal}>{cookies.get('i18next') === 'ar' ? blogsLast.title__ar : (cookies.get('i18next') == 'fr' ? blogsLast.title__fr : blogsLast.title__en)}</p>
                         <p className='blogsPageCompPara'>
                              {cookies.get('i18next') === 'ar' ? parse(`${blogsLast.text__ar}`.substr(0, 150) + ' ...') : (cookies.get('i18next') == 'fr' ? parse(`${blogsLast.text__fr}`.substr(0, 150) + ' ...') : parse(`${blogsLast.text__en}`.substr(0, 150) + ' ...'))}
                         </p>
                         <div className='blogsPageActions'>
                              <div><img src={pen} alt="" /><span>John Doe</span> </div>
                              <div><img src={clock} alt="" /><span>{moment(blogsLast.updated_at).format('DD/MM/YYYY')}  </span> </div>
                              <div><a className="readMoreBlogItem" onClick={openModal}>Read More</a></div>
                         </div>
                    </div>
               </div>

               <div className="blogPageContainer">
                    {
                         blogs.map(blog => <BlogsPageComponent blog={blog} />)
                    }
               </div>

          </div>
     )
}

export default BlogsPage
