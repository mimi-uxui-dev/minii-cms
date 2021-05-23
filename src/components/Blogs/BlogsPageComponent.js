import React, { useState } from 'react'
import blogPic from '../../assets/img/Blogs/blogPic.jpg'
import pen from '../../assets/img/Blogs/Pen.svg'
import CloseBtn from '../../assets/img/Products/XCircle.svg'
import clock from '../../assets/img/Blogs/Clock.svg'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'

import Modal from 'react-modal';
import cookies from 'js-cookie'
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

function BlogsPageComponent({ blog }) {

     const [modalIsOpen, setIsOpen] = useState(false);


     function openModal() {
          setIsOpen(true);
     }
     function closeModal() {
          setIsOpen(false);
     }

     return (
          <div className='blogsPageCompContainer'>

               <Modal isOpen={modalIsOpen}>

                    <img className='closeBtnModal' onClick={closeModal} src={CloseBtn} alt="" />

                    <div className='blogModalContent'>

                         <img className='blogModalimg' src={blog.photo} alt="" />

                         <div>
                              <div>
                                   <p className='blogsPageCompCategory'>in<span> {blog.domaine}</span></p>
                                   <div><img src={pen} alt="" /><span> Admin </span> </div>
                                   <div><img src={clock} alt="" /><span> {moment(blog.updated_at).format('DD/MM/YYYY')}  </span> </div>
                              </div>
                              <p className='blogsPageCompTitle' onClick={openModal} >{cookies.get('i18next') === 'ar' ? blog.title__ar : (cookies.get('i18next') == 'fr' ? blog.title__fr : blog.title__en)}</p>
                              <p className='blogsPageCompPara'>
                                   {cookies.get('i18next') === 'ar' ? parse(`${blog.text__ar}`) : (cookies.get('i18next') == 'fr' ? parse(`${blog.text__fr}`) : parse(`${blog.text__en}`))}
                              </p>
                         </div>

                    </div>
               </Modal>

               <img className='blogsPageCompImg' src={blog.photo} alt="" onClick={openModal} />
               <div>
                    <p className='blogsPageCompCategory'>in<span> {blog.domaine}</span></p>
                    <p className='blogsPageCompTitle' onClick={openModal} >{cookies.get('i18next') === 'ar' ? blog.title__ar : (cookies.get('i18next') == 'fr' ? blog.title__fr : blog.title__en)}</p>
                    <div>
                         <div><img src={pen} alt="" /><span> Admin </span> </div>
                         <div><img src={clock} alt="" /><span> {moment(blog.updated_at).format('DD/MM/YYYY')}  </span> </div>
                    </div>
                    <p className='blogsPageCompPara'>
                         {cookies.get('i18next') === 'ar' ? parse(`${blog.text__ar}`.substr(0, 200) + ' ...') : (cookies.get('i18next') == 'fr' ? parse(`${blog.text__fr}`.substr(0, 200) + ' ...') : parse(`${blog.text__en}`.substr(0, 200) + ' ...'))}
                    </p>
               </div>
          </div>
     )
}

export default BlogsPageComponent
