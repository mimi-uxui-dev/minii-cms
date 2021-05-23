import React from 'react'
import Product from './Product'

import spinner from '../../assets/img/spinner.svg'


function ProductsAll({ data }) {
     return (
          <div className='PP_grid_container'>

               <div className='PP_grid'>
                    {data.length === 0 ? <img src={spinner} alt="" /> : data.map(p => <Product product={p} />)}
               </div>
          </div>
     )
}

export default ProductsAll
