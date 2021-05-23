import React, { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { COMPANY_INFORMATION } from '../sevices/globalServices'

export const MyContext = createContext();

export const MyContextProvider = props => {

     const [companiesInfo, setCompaniesInfo] = useState([])

     useEffect(async () => {

          const fetchData = async () => {
               const result = await axios.get(COMPANY_INFORMATION(1))
                    .then(res => setCompaniesInfo(res.data.data))

          }
          fetchData()

     }, [])
     return (
          <MyContext.Provider value={[companiesInfo, setCompaniesInfo]}>
               {props.children}
          </MyContext.Provider>
     );

};
