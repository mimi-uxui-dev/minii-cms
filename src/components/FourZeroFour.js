import React from 'react'
import { Link } from 'react-router-dom'

function FourZeroFour() {
     return (
          <div className='page404Container'>
               <div className='page404InnerContainer'>
                    <h1>OOPS!</h1>
                    <p>The page you are looking for might have been removed, had it's name changes, or is temporarily unavailable.</p>
                    <div>
                         <Link to='/' >Get Back Home</Link>
                         <Link to='/contact' >Contact Us</Link>
                    </div>
               </div>
          </div>
     )
}

export default FourZeroFour
