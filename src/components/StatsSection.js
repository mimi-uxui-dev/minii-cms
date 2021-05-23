import img from '../assets/img/Stats/Feature Icon with circle.png';
import img1 from '../assets/img/Stats/Feature Icon with circle-1.png';
import img2 from '../assets/img/Stats/Feature Icon with circle-2.png';
import img3 from '../assets/img/Stats/Feature Icon with circle-3.png';

function statSection() {
       const data = [
              { id: 1, img: img, p1: '40+', p2: "Happy Clients" },
              { id: 2, img: img1, p1: '540+', p2: "Projects Completed" },
              { id: 3, img: img2, p1: '300 ', p2: "Dedicated Members" },
              { id: 4, img: img3, p1: '25+ ', p2: "Awards Won" },
       ]

       return (
              <div className='statsContainer'>
                     <div className='statsInner'>
                            {data.map(d =>
                                   <div key={d.id}>
                                          <img src={d.img} alt="" />
                                          <p className='statsInnerDivNumber'>{d.p1}</p>
                                          <p className='statsInnerDivTxt'>{d.p2}</p>
                                   </div>
                            )}
                     </div>
              </div>
       )
}

export default statSection