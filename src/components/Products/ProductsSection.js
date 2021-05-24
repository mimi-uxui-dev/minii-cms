import React, { useContext, useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import Product from './Product'
import axios from 'axios'

import { Route, Switch, Link } from 'react-router-dom'
import { PRODUCTS_LIMIT, PRODUCTS_CA_LIMIT } from '../../sevices/globalServices'
import lineGreenish from '../../assets/img/Vector 5.svg'
import spinner from '../../assets/img/spinner.svg'
import { Tabs } from "@feuer/react-tabs";
import cookies from 'js-cookie'


function ProductsSection() {
     const { t } = useTranslation()

     const [productsLimit, setProductsLimit] = useState([])
     const [products_CA_Limit, setProducts_CA_Limit] = useState([])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(PRODUCTS_LIMIT())
                    .then(res => setProductsLimit(res.data.data))
          }
          fetchData()
     }, [])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(PRODUCTS_CA_LIMIT())
                    .then(res => setProducts_CA_Limit(res.data.data))
          }
          fetchData()
     }, [])

     return (
          <div className='productsSectionContainer'>

               <div className='MainTitle'>
                    <p className='MainTitle0'>• {t('P_SEC_TAG')} •</p>
                    <h1 className='MainTitle1'  >{t('P_SEC_TITLE')}</h1>
                    <img src={lineGreenish} alt="" />
               </div>


               <div className='TabsProducts_container'>

                    <Tabs activeTab={{ id: "All" }} tabsProps={{ style: { textAlign: "center", } }} >

                         <Tabs.Tab id='All' title={cookies.get('i18next') === 'ar' ? 'كل المنتجات' : (cookies.get('i18next') == 'fr' ? "Tout" : "َAll")} >
                              <div className='ProductsGrid' >
                                   {productsLimit.map(p => <Product product={p} />)}
                              </div>
                         </Tabs.Tab>

                         {
                              products_CA_Limit.map(c => <Tabs.Tab id={c.id} title={cookies.get('i18next') === 'ar' ? c.name__ar : (cookies.get('i18next') == 'fr' ? c.name__fr : c.name__en)}>
                                   <div className='ProductsGrid'>
                                        {productsLimit.map(p => p.product_categories_id === c.id ? <Product product={p} /> : null)}
                                   </div>
                              </Tabs.Tab>)
                         }

                    </Tabs>

               </div>

               <div className='ProductsSection_cta'>
                    <Link to='/products'>{t('P_SEC_Link')} »</Link>
               </div>

          </div>
     )
}

export default ProductsSection
