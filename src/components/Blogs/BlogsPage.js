import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogsPageComponent from './BlogsPageComponent'
import pc from '../../assets/img/Blogs/pc.png'
import pen from '../../assets/img/Blogs/Pen.svg'
import clock from '../../assets/img/Blogs/Clock.svg'
import Header from '../Header'

import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

import { BLOGS } from '../../sevices/globalServices'
import headerbg from '../../assets/img/breadcrumb_bkg.jpg'
import axios from 'axios'

function BlogsPage() {

     const [blogs, setBlogs] = useState([])

     useEffect(async () => {
          const fetchData = async () => {
               const result = await axios.get(BLOGS())
                    .then(res => setBlogs(res.data.data))
          }
          fetchData()
     }, [])



     return (
          <div className='BlogsPageMain'>

               <Header pageTitle={'Our Blog'} pageCrumb={'Blog'} bg={headerbg} />

               <div className='blogsPageMainCompo'>
                    <img src={pc} alt="" />

                    <div className='blogsPageMainCompoTxt'>
                         <p className='blogsPageCompCategory'>in<span> Commerce</span></p>
                         <p className='blogsPageCompTitle'>Orci a urna nisl elit ut. Accumsan</p>
                         <p className='blogsPageCompPara'>
                              Sit parturient vel augue nulla vulputate dolor arcu vel arcu massa venenatis vitae interdum leo cursus. Sit parturient vel augue nulla vulputate dolor arcu vel arcu massa venenatis vitae interdum leo cursus.
                         </p>
                         <div className='blogsPageActions'>
                              <div><img src={pen} alt="" /><span>John Doe</span> </div>
                              <div><img src={clock} alt="" /><span>2 days ago</span> </div>
                              <div><Link className="readMoreBlogItem" to=''>Read More</Link></div>
                         </div>
                    </div>
               </div>

               <div className="blogPageContainer">
                    {

                         blogs.map(blog => <BlogsPageComponent blog={blog} />)
                    }
               </div>

          </div>
     )
}

export default BlogsPage
