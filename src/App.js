import './App.scss';
import React, { useEffect } from 'react'

import { Route, Switch, Redirect } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

import Navbar from './components/Navbar'
import { MyContextProvider } from './context/MyContext'
import { ProductsProvider } from './context/ProductsContext'

import ProductDetails from './components/Products/ProductDetails'
import ProductsPage from "./components/Products/ProductsPage"
import Home from './components/Home'
import Footer from './components/Footer';
import BlogsPage from './components/Blogs/BlogsPage';
import BlogDetails from './components/Blogs/BlogDetails';
import ProductCategories from './components/Products/ProductCategories'
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import FaqsPage from './components/Faqs/FaqsPage'

function App() {
  const { t } = useTranslation()

  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
    },
  ]

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr"
    // document.body.dir = "ltr"
    document.title = t('app_title')
  }, [currentLanguage, t])


  return (
    <>
      <MyContextProvider>
        <ProductsProvider>
          <div id='App'>

            <Navbar languages={languages} />

            <Switch>
              <Route path="/" exact component={Home} />

              {/* <Route path="/products/:id" component={ProductDetails} /> */}
              <Route path="/products" component={ProductsPage} />

              <Route path="/blogs" component={BlogsPage} />
              <Route path="/blogs/:id" component={BlogDetails} />

              <Route path="/contact" component={Contact} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/faqs" component={FaqsPage} />
            </Switch>

            <ToastContainer />
            <Footer />

          </div>
        </ProductsProvider>
      </MyContextProvider>

    </>
  );
}

export default App