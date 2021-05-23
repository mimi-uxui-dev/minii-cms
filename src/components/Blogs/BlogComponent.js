import React from 'react'
import blogImg from '../../assets/img/Blogs/blogImg.svg'
import pen from '../../assets/img/Blogs/Pen.svg'
import clock from '../../assets/img/Blogs/Clock.svg'


function BlogComponent() {
     return (
          <div className='blogCompo'>
               <img src={blogImg} alt="" />
               <div>
                    <p className='blogCompoTitle'><a href="">Elit volutpat ut purus aliquam.</a></p>
                    <div>
                         <div><img src={pen} alt="" /><span>John Doe</span> </div>
                         <div><img src={clock} alt="" /><span>2 days ago</span> </div>
                    </div>
               </div>

          </div>
     )
}

export default BlogComponent
