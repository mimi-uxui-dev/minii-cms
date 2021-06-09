import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import axios from 'axios'
import { SEARCH } from '../sevices/globalServices'
import { Pagination } from 'react-laravel-paginex'

function SearchPage(props) {

     const form_data = props.location.state

     const [data, setdata] = useState({})



     const getData = (page) => {

          axios.post(`${SEARCH()}?page=${page}`, form_data).then(response => {
               setdata(response.data);
               console.log('getDAta', data)
          });

     }

     useEffect(() => {

          const fetchDAta = async () => {

               await axios.post(SEARCH(), form_data).then(response => {
                    setdata(response.data);
                    console.log('data', data)
               });
          }

          fetchDAta()

          setTimeout(() => {
               fetchDAta()
          }, 100);
     }, [form_data])


     return (
          <div className='searchPage_container'>
               <h1> Search Page </h1>
               <div className="searchPage_grid">
                    {/* {
                         data.length === 0 ?
                              <p></p>
                              :
                              data.data.map(d => <div className="SearchPage_grid_card">
                                   <img className='searchImg' src={d.photo} alt="" />
                                   <div className='searchInfo'>
                                        <h4>{d.title__fr || d.name__fr}</h4>
                                        <p> {parse(`${d.text__fr || d.description__fr}`)} </p>
                                   </div>
                              </div>)
                    } */}
               </div>

               <div>

                    <Pagination changePage={getData} data={data} />
               </div>

          </div>
     )
}

export default SearchPage
