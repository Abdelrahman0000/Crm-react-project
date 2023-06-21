import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'
import {Person , Calendar , ChatDots} from 'react-bootstrap-icons'


export default function Card({img , setimg}) {
  return (
    <div className="card">
      <div className="image"> <img src={img} alt="" />   </div>
<div className="inner">
<p className='my-p'> <span >  <Calendar />  </span> April 10, 2022    <span style={{marginLeft: "2rem"}}> <Person />  </span>Admin <span style={{marginLeft: "2rem"}}> <ChatDots />  </span>No Comments   </p>
<h2>6 Tips To Help You Build Your Social Media
Effeciency & Better</h2>

<p>Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. ipsum dolor amet, consectetur adipiscing vestibulum ipsum primis in.</p>
<div className="btn-cov" onClick={()=>setimg(img)}> <Link to='/article' className="my-btn">  Read More </Link>   </div>
</div>


    </div>
  )
}