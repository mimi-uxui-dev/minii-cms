import React, { Component, useEffect, useState, } from 'react'
import parse from 'html-react-parser'
import axios from 'axios'
import { SEARCH } from '../sevices/globalServices'
import Pagination from 'react-js-pagination'
import cookies from 'js-cookie'
import Modal from 'react-modal';
import CloseBtn from '../assets/img/Products/XCircle.svg'


const customStyles = {
     content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'

     }
};


class SearchPage extends Component {

     state = {
          data: {},
          modalIsOpen: false
     }

     form_data = this.props.location.state

     async getData(pageNumber = 1) {
          console.log('form data ', this.form_data)

          const r = await axios.post(`${SEARCH()}?page=${pageNumber}`, this.form_data)

          this.setState({ data: r.data })

          console.log("---> ", this.state.data.data)
     }

     componentDidMount() {
          this.getData()
     }


     renderList = () => {
          return (
               <ul className="list-group">
                    <Modal isOpen={this.state.modalIsOpen}>
                         <img className='closeBtnModal' onClick={() => this.setState({ modalIsOpen: false })} src={CloseBtn} alt="" />

                    </Modal>
                    {
                         <React.Fragment>
                              <div className='searchPage_grid'>
                                   {
                                        Object.keys(this.state.data).length === 0 ?
                                             console.log('loading') :
                                             this.state.data.data.map(d => <div className="SearchPage_grid_card">

                                                  <img className='searchImg' onClick={() => this.setState({ modalIsOpen: true })} src={d.photo} alt="" />

                                                  <div className='searchInfo' onClick={() => this.setState({ modalIsOpen: true })} >

                                                       <h4>
                                                            <span>
                                                                 {cookies.get('i18next') === 'ar' ? d.title__ar : (cookies.get('i18next') == 'fr' ? d.title__fr : d.title__en)}
                                                            </span>

                                                            <span>
                                                                 {cookies.get('i18next') === 'ar' ? d.name__ar : (cookies.get('i18next') == 'fr' ? d.name__fr : d.name__en)}
                                                            </span>

                                                       </h4>

                                                       <p>

                                                            <span>
                                                                 {
                                                                      cookies.get('i18next') === 'ar' ? d.text__ar : (cookies.get('i18next') == 'fr' ? d.text__fr : d.text__en)
                                                                 }
                                                            </span>

                                                            <span>
                                                                 {
                                                                      cookies.get('i18next') === 'ar' ? d.description__ar : (cookies.get('i18next') == 'fr' ? d.description__fr : d.description__en)
                                                                 }
                                                            </span>


                                                       </p>

                                                  </div>
                                             </div>)
                                   }
                              </div>

                              <Pagination
                                   totalItemsCount={this.state.data.total}
                                   activePage={this.state.data.current_page}
                                   itemsCountPerPage={this.state.data.per_page}
                                   onChange={(pageNumber = 1) => this.getData(pageNumber)}
                                   itemClass='page-item'
                                   linkClass='page-link'
                                   firstPageText='First'
                                   lastPageText='Last'
                              />

                         </React.Fragment >
                    }
               </ul>
          )
     }


     render() {
          return (
               <div className='searchPage_container' >
                    <h1> Search Page </h1>
                    <div className="searchPage_grid">

                    </div>

                    <div>

                         <div className="container">
                              <div className="row">
                                   <div className="col-md-12">

                                        {this.state.data && this.renderList()}

                                   </div>
                              </div>
                         </div>

                    </div>

               </div>
          )
     }

}

export default SearchPage
