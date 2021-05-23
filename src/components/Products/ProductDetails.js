import React, { useEffect, useState, useContext } from 'react'
import cookies from 'js-cookie'
import { ProductsContext, ProductsProvider } from '../../context/ProductsContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

     const [products, setproducts] = useContext(ProductsContext)

     const { id } = useParams()


     // productsLimit.map(p => p.product_categories_id === c.id ? <Product product={p} /> : null)



     const thisProduct = (products.length == 0 ? 'Loading...' : products.find(p => ((p.id === id) ? p : 'Product Not Found')))


     return (
          <ProductsProvider>
               <div className='ProducDetailsContainer'>

                    <div className='pd_firstDiv'>
                         <img src={thisProduct.photo} alt="" />

                         <div className='ProducDetails_info'>
                              <p className='pd_title'>{cookies.get('i18next') === 'ar' ? thisProduct.name__ar : (cookies.get('i18next') == 'fr' ? thisProduct.name__fr : thisProduct.name__en)}</p>
                              <p className='pd_price'>{thisProduct.price} {cookies.get('i18next') === 'ar' ? 'دج' : 'DA'}</p>
                              <p className='pd_cate'>Categorie: {cookies.get('i18next') === 'ar' ? thisProduct.category__ar : (cookies.get('i18next') == 'fr' ? thisProduct.category__fr : thisProduct.category__en)}</p>

                              <p className='pd_available'>{thisProduct.availability ? 'Yes in Stock' : 'Not in Stock'}</p>
                         </div>

                    </div>

                    <div className='pd_secondDiv'>
                         <p className='pd_desc_title'>Description</p>
                         <p className='pd_desc'>{cookies.get('i18next') === 'ar' ? thisProduct.description__ar : (cookies.get('i18next') == 'fr' ? thisProduct.description__fr : thisProduct.description__en)}</p>

                    </div>
               </div>

          </ProductsProvider>
     )
}

export default ProductDetails