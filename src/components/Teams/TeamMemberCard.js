import React from 'react'
import parse from 'html-react-parser'

import cookies from 'js-cookie'
import fb from '../../assets/img/Team/FacebookLogo.png'
import ig from '../../assets/img/Team/InstagramLogo.png'
import tw from '../../assets/img/Team/TwitterLogo.png'

function TeamMemberCard({ team }) {
     return (
          <div className='teamMemberCard'>
               <img className='profilePic' src={team.photo} alt='' />
               <p className="TeamMemberName">{team.full_name}</p>
               <p className="TeamMemberPosition">{cookies.get('i18next') === 'ar' ? team.workplace__ar : team.workplace__en} </p>
               <p className="TeamMemberDesc">
                    {cookies.get('i18next') === 'ar' ? parse(`${team.description__ar}`) : (cookies.get('i18next') == 'fr' ? parse(`${team.description__fr}`) : parse(`${team.description__en}`))}
               </p>

               <div className="teamMemberSM">
                    <a href={team.facebook} target='_blank'>
                         <img src={fb} alt="" />
                    </a>

                    <a href={team.instagram} target='_blank'>
                         <img src={ig} alt="" />
                    </a>

                    <a href={team.twitter} target='_blank'>
                         <img src={tw} alt="" />
                    </a>
               </div>

          </div>
     )

}

export default TeamMemberCard