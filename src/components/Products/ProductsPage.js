import React, { useState, useEffect } from 'react'
import { Link, Switch, Route, useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import Header from '../Header'
import headerbg from '../../assets/img/breadcrumb_woo.jpg'
import { PRODUCTS, PRODUCTS_CA } from '../../sevices/globalServices'
import ProductsC from './ProductsC'
import ProductsAll from './ProductsAll'

function ProductsPage() {

     const [products, setProducts] = useState([])
     const [products_CA, setProducts_CA] = useState([])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(PRODUCTS())
                    .then(res => setProducts(res.data.data))
          }
          fetchData()
     }, [])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(PRODUCTS_CA())
                    .then(res => setProducts_CA(res.data.data))
          }
          fetchData()
     }, [])


     return (
          <div className='PP_container'>
               <Header pageTitle={'All Products'} pageCrumb={'Products'} bg={headerbg} />

               <div className='PP_innerContainer'>

                    <div className='PP_categ'>
                         <p>Explore</p>
                         <div>
                              <NavLink activeClassName='is-active' to='/products'><span>&nbsp; 🢒</span> All</NavLink>
                              {
                                   products_CA.map(category => <NavLink activeClassName='is-active' key={category.id} to={`/products/${category.id}`}> <span>&nbsp; 🢒</span> {category.name__en}  </NavLink>)
                              }
                         </div>
                    </div>

                    <Switch>

                         useParams().length == 0 ?
                         <Route exact path={`/products`}>  <ProductsAll data={products} /> </Route>
:
                         {products_CA.map(category => <Route key={category.id} exact path={`/products/:category_id`}> <ProductsC data={products} /> </Route>)}
                    </Switch>
               </div>


          </div>
     )
}

export default ProductsPage
