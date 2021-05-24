import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

import { ProductsProvider } from '../context/ProductsContext'

import SliderComponent from './SliderComponent'
import CompanyInformation from './CompanyInformation'
import WhatWeOffer from './WhatWeOffer'
import Contact from './Contact'
import ProductsSection from './Products/ProductsSection'
import Partners from './Partners';
import Teams from './Teams/Teams'
import Faqs from './Faqs/Faqs';
import BlogsSection from './Blogs/BlogsSection';

function Home() {
     const { t } = useTranslation()

     const languages = [
          {
               code: 'fr',
               name: 'Français',
               country_code: 'fr'
          },
          {
               code: 'en',
               name: 'English',
               country_code: 'gb'
          },
          {
               code: 'ar',
               name: 'العربية',
               dir: 'rtl',
               country_code: 'sa'
          },
     ]

     const currentLanguageCode = cookies.get('i18next') || 'en'
     const currentLanguage = languages.find(l => l.code === currentLanguageCode)

     useEffect(() => {
          document.body.dir = currentLanguage.dir || "ltr"
          document.title = t('app_title')
     }, [currentLanguage, t])


     return (
          <div>
               <SliderComponent />
               <CompanyInformation lang={currentLanguage} />
               <WhatWeOffer lang={currentLanguage} langCode={currentLanguageCode} />

               {/* 
               <ProductsProvider>
                    <ProductsSection />
               </ProductsProvider>
               */}

               <ProductsSection />
               <Partners />
               <Teams />
               <BlogsSection />
          </div>
     )
}

export default Home
