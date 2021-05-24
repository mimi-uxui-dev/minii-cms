import React, { useState, useEffect } from 'react'
import cookies from 'js-cookie'
import shareBTN from '../../assets/img/ShareNetwork.svg'
import eye from '../../assets/img/Eye.svg'
import CloseBtn from '../../assets/img/Products/XCircle.svg'
import parse from 'html-react-parser'
import axios from 'axios'
import { PRODUCTS_CA } from '../../sevices/globalServices'
import { useTranslation } from 'react-i18next'
import { ROOT } from '../../sevices/globalServices'

import {
     EmailShareButton,
     FacebookShareButton,
     TwitterShareButton,
     FacebookMessengerShareButton,
     WhatsappShareButton,
     PinterestShareButton
} from "react-share";

import {
     EmailIcon,
     FacebookIcon,
     TwitterIcon,
     FacebookMessengerIcon,
     WhatsappIcon,
     PinterestIcon
} from "react-share";

import sadFace from '../../assets/img/sad_face.svg'

import Modal from 'react-modal';

import { Link } from 'react-router-dom'

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


function Product({ product }) {
     const { t } = useTranslation()

     const [modalIsOpen, setIsOpen] = useState(false);
     const [modalIsOpen1, setIsOpen1] = useState(false);
     const [categories, setCategories] = useState([])

     useEffect(() => {
          const fetchData = async () => {
               const result = await axios.get(PRODUCTS_CA())
                    .then(res => setCategories(res.data.data))

          }
          fetchData()
     }, [])

     function openModal() {
          setIsOpen(true);
     }
     function closeModal() {
          setIsOpen(false);
     }
     function openModal1() {
          setIsOpen1(true);
     }
     function closeModal1() {
          setIsOpen1(false);
     }
     return (
          <div className='ProductContainer'>

               <Modal isOpen={modalIsOpen}>

                    <img className='closeBtnModal' onClick={closeModal} src={CloseBtn} alt="" />

                    <div className='modelContent'>
                         <EmailShareButton
                              subject={product.name__en}
                              body={product.description__en}
                              separator=' '
                         >
                              <EmailIcon size="32" round={true} />
                         </EmailShareButton>

                         <FacebookShareButton
                              quote={product.name__en}
                              url={`${ROOT}/products`}
                         >
                              <FacebookIcon size="32" round={true} />
                         </FacebookShareButton>

                         <PinterestShareButton
                              url={product.name__en}
                              description={product.description__en}
                              media={product.photo}
                         >
                              <PinterestIcon size={32} round={true} />
                         </PinterestShareButton>

                         <TwitterShareButton
                              title={product.name__en}
                              via={product.name__en}
                              url={`${ROOT}/products`}
                         >
                              <TwitterIcon size={32} round={true} />
                         </TwitterShareButton>

                         <WhatsappShareButton
                              title={product.name__en}
                              separator='_'
                              url={`${ROOT}/products`}
                         >
                              <WhatsappIcon size={32} round={true} />
                         </WhatsappShareButton>

                         <FacebookMessengerShareButton
                              url={`${ROOT}/products`}
                              appId='e'
                         >
                              <FacebookMessengerIcon size={32} round={true} />
                         </FacebookMessengerShareButton>
                    </div>
               </Modal>

               <Modal isOpen={modalIsOpen1} className='model_pr_detail'>
                    <img className='closeBtnModal' onClick={closeModal1} src={CloseBtn} alt="" />
                    <div className='modelContent'>
                         <img src={product.photo} alt="" />

                         <div className='modelContentTXT'>
                              <p className='modelContentTXT_title'>{cookies.get('i18next') === 'ar' ? product.name__ar : (cookies.get('i18next') == 'fr' ? product.name__fr : product.name__en)}</p>
                              <p className='modelContentTXT_para'>{cookies.get('i18next') === 'ar' ? parse(`${product.description__ar}`) : (cookies.get('i18next') == 'fr' ? parse(`${product.description__fr}`) : parse(`${product.description__en}`))}</p>
                              <div className='modelContentTXT_avail'> {product.availability ? null : <div> <img src={sadFace} alt="" /> Out of Stock </div>} </div>
                              <hr />
                              {/* <p className='modelContentTXT_cate'>
                                   <span>Categories:</span> {
                                        categories.length === 0 ? 'Loading..' : categories.map(c => (product.product_categories_id === c.id ? <Link to={`/products/${c.id}`}>
                                             {cookies.get('i18next') === 'ar' ? c.name__ar : (cookies.get('i18next') == 'fr' ? c.name__fr : c.name__en)} </Link> : 'no'))
                                   }
                              </p> */}
                         </div>
                    </div>
               </Modal>

               <div>

                    <div className='eyeShareContainer' >
                         <img
                              onClick={openModal1}
                              className='ProductContainerEyeBTN'
                              src={eye}
                              alt=""
                         />
                         <img
                              onClick={openModal}
                              className='ProductContainerShareBTN'
                              src={shareBTN}
                              alt=""
                         />
                    </div>

                    <div>
                         {
                              product.availability ? null : <div className="outOfStock_tag"> {t('P_COMPO_outOfStock')} </div>
                         }
                    </div>

                    <img className='ProductContainerImg' src={product.photo} alt="" />
                    <p className='ProductContainerName'>{cookies.get('i18next') === 'ar' ? product.name__ar : (cookies.get('i18next') == 'fr' ? product.name__fr : product.name__en)} </p>
                    <div className='grayLiine'></div>
                    <p className="ProductContainerViewProduct" onClick={openModal1}>{t('P_COMPO_viewProduct')} »</p>

               </div>

          </div >
     )
}

export default Product
