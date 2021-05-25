import React from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import spinner from '../../assets/img/spinner.svg'
function ProductsC({ data }) {

     const { category_id } = useParams()

     // const thisProducts = (data.length == 0 ? 'Loading...' : data.filter(p => (p.product_categories_id === category_id ? 'y' : 'n')))

     //const data_ = data.filter(p => p.product_categories_id !== p.id ? p.name__fr : null)


     /*   const myData = data.length == 0 ?
            'Loading...' :
            data.map(p => p.product_categories_id === parseInt(category_id) ? p.name__fr : 'null')
     */
     return (

          <div className='PP_grid_container'>

               <div className='PP_grid'>
                    {
                         data.length == 0 ?
                              <img src={spinner} className='spinner' alt="" /> :
                              data.map(p => p.product_categories_id === parseInt(category_id) ? <Product product={p} /> : null)
                    }
               </div>
          </div >
     )
}

export default ProductsC