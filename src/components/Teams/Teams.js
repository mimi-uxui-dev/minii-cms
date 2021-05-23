import React, { useEffect, useState } from 'react'
import Slider from "react-slick"

import axios from 'axios'
import TeamMemberCard from './TeamMemberCard'
import { MEMBERS } from '../../sevices/globalServices'
import lineGreenish from '../../assets/img/Vector 5.svg'

import spinner from '../../assets/img/spinner.svg'

function Teams() {

     const [teams, setTeams] = useState([])

     useEffect(() => {
          const fetchData = async () => {
               const result = await axios.get(MEMBERS())
                    .then(res => setTeams(res.data.data))
          }
          fetchData()
     }, [])


     var slider_settings_moreThan03 = {
          dots: true,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 2500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1
                    }
               },
               {
                    breakpoint: 700,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                    }
               },
          ]
     };

     return (
          <div className='teamsContainer'>
               <div className='MainTitle'>
                    <p className='MainTitle0'>• MEMBERS •</p>
                    <h1 className='MainTitle1' >Meet The Team</h1>
                    <img src={lineGreenish} alt="" />
                    <p className='MainTitle0wwo'>Prnare sem molestie. Sed suscipit sollicitudin nulla tempor congue. Integer sed elementum odio.</p>
               </div>

               <div>
                    <Slider {...slider_settings_moreThan03}>
                         {
                              teams.length === 0 ? <img src={spinner} className='spinner' alt='' /> : teams.map(team => <TeamMemberCard key={team.id} team={team} />)
                         }
                    </Slider>
               </div>

          </div>
     )
}

export default Teams
