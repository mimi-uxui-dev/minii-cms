import React, { useState } from 'react'


function PricingSection() {
       const dataObj = [
              {
                     type: 'yearly',
                     active: false,
                     data: [
                            {
                                   type: 'Starter yrly',
                                   price: 10,
                                   options: [
                                          '10 website yrl',
                                          '15GB Hosting yrl',
                                          'Premium Support yrl',
                                   ],
                                   btn: {
                                          label: 'Get Started yrly',
                                          link: 'https://www.google.com'
                                   }
                            },
                            {
                                   type: 'Premium yrly',
                                   price: 129,
                                   options: [
                                          '10 website yrly',
                                          '15GB Hosting yrly',
                                          'Premium Support yrly',
                                   ],
                                   btn: {
                                          label: 'Get Started yrly',
                                          link: 'https://www.google.com'
                                   }

                            },
                            {
                                   type: 'Enterprise yrly',
                                   price: 149,
                                   options: [
                                          '10 website yrly',
                                          '15GB Hosting yrly',
                                          'Premium Support yrly',
                                   ],
                                   btn: {
                                          label: 'Get Started yrly',
                                          link: 'https://www.google.com'
                                   }
                            }]
              },
              {
                     type: 'monthly',
                     active: true,
                     data: [
                            {
                                   type: 'Starter',
                                   price: 0,
                                   options: [
                                          '1 website',
                                          '15GB Hosting',
                                          'Premium Support',
                                   ],
                                   btn: {
                                          label: 'Get Started',
                                          link: 'https://www.google.com'
                                   }
                            },
                            {
                                   type: 'Premium',
                                   price: 29,
                                   options: [
                                          '10 website',
                                          '15GB Hosting',
                                          'Premium Support',
                                   ],
                                   btn: {
                                          label: 'Get Started',
                                          link: 'https://www.google.com'
                                   }

                            },
                            {
                                   type: 'Enterprise',
                                   price: 49,
                                   options: [
                                          'Unlimited website',
                                          '15GB Hosting',
                                          'Premium Support',
                                   ],
                                   btn: {
                                          label: 'Get Started',
                                          link: 'https://www.google.com'
                                   }
                            }
                     ]
              }

       ]

       const [dataState, setDataState] = [dataObj]

       return (


              <div className='pricingContainer'>
                     <div className="pricingA">
                            <p className='priceCardMainTitle'>Get the right plan for future product.</p>
                            <div className='switchContaiiner'>
                                   <span>Monthly</span>
                                   <Toggle />

                                   <span>Yearly</span>

                            </div>
                     </div>

                     <div className='pricingSectionContainer'>
                            {dataObj.map(d => d.active === true ?
                                   <div className='priceCard'>
                                          {
                                                 d.data.map(d => <div>
                                                        <p className='priceCardType'> {d.type} </p>
                                                        <p className='priceCardPrice'> {d.price === 0 ? 'Free' : `$${d.price}/month`} </p>
                                                        <p className='priceCardOptions' > {d.options.map(o => <li>{o}</li>)} </p>
                                                        <a className='priceCardBtn' href={d.btn.link}>{d.btn.label}</a>
                                                 </div>)
                                          }
                                   </div>
                                   :
                                   null

                            )
                            }
                     </div>
              </div>
       )
}

export default PricingSection