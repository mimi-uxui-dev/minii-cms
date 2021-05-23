import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlogComponent from './BlogComponent'
import { Link } from 'react-router-dom'
import { BLOG_LIMIT } from '../../sevices/globalServices'


function BlogsSection() {

     const [blogs, setBlogs] = useState([])

     useEffect(async () => {

          const fetchData = async () => {
               const result = await axios.get(BLOG_LIMIT())
                    .then(res => setBlogs(res.data.data))

          }
          fetchData()

     }, [])


     console.log('blogs', blogs)

     return (
          <div className='blogSectionContainer'>
               <div className='blogSectionInnerContainer'>
                    <p className='BlogSectionTitle'>Latest blog about our Services</p>

                    <BlogComponent />
                    <BlogComponent />
                    <BlogComponent />
                    <BlogComponent />
                    <Link to='/blogs' className='blogSection_seeAllPosts'> See all blog posts </Link>
               </div>
          </div>
     )
}

export default BlogsSection
