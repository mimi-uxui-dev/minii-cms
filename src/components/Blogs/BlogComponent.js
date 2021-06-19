import React, { useState } from 'react'
import CloseBtn from '../../assets/img/Products/XCircle.svg'
import parse from 'html-react-parser'
import Modal from 'react-modal';
import cookies from 'js-cookie'
import moment from 'moment'
import pen from '../../assets/img/Blogs/Pen.svg'
import clock from '../../assets/img/Blogs/Clock.svg'

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


function BlogComponent({ blog }) {

     const [modalIsOpen, setIsOpen] = useState(false);

     const textArabic = { textAlign: (cookies.get('i18next') === 'ar') ? "right" : "left", marginRight: (cookies.get('i18next') === 'ar') ? "16px" : "0" }

     function openModal() {
          setIsOpen(true);
     }
     function closeModal() {
          setIsOpen(false);
     }

     return (

          <div className='blogCompo'>

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

               <img src={blog.photo} alt="" onClick={openModal} />
               <div>
                    <p className='blogCompoTitle' onClick={openModal} style={textArabic} >{cookies.get('i18next') === 'ar' ? blog.title__ar : (cookies.get('i18next') == 'fr' ? blog.title__fr : blog.title__en)}</p>
                    <div>
                         <div><img src={pen} alt="" /><span>Admin</span> </div>
                         <div><img src={clock} alt="" /><span>{moment(blog.updated_at).format('DD/MM/YYYY')} </span> </div>
                    </div>
               </div>

          </div>
     )
}

export default BlogComponent
