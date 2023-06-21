import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { List , X} from 'react-bootstrap-icons'
import './Navbar.css'
import Logo from '../../images/Logo.png'
export default function Navbar() {
const [isClose , setClose]=useState(false)

  return (
    <nav className='Navbar'>
      <div className="nav-inner ">
        <div className="my-list" >
       <div className="logo">
          <Link to="/"> <div className="my-row"> <img src={Logo} alt="logo" style={{width:'55px',height:'55px'}} /> {' '} <h2 style={{marginLeft:'5px'}}>PrimeCRM</h2> </div></Link>  
         
      </div> 

<div className="list">
  <h4 onClick={()=>setClose(!isClose)}> {isClose? <X/> :<List />  } </h4>
</div>
</div>

       <div className="links my-row d-none-first">
        <ul className='my-row'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Our  Blog</Link>
          </li>
          <li>
            <Link to="/">Connect a Wallet</Link>
          </li>
        </ul>
      
      <div className='btn-cov' >
        <Link to="/" className="my-btn ">login</Link>
      </div>
      </div>

      <div className={`links my-column d-none-saconde ${isClose?`animate`:`noneHight`}`}>
        <ul className='my-column'>
          <li>
            <Link to="/">Marketplace</Link>
          </li>
          <li>
            <Link to="/">Rankings</Link>
          </li>
          <li>
            <Link to="/">Connect a Wallet</Link>
          </li>
        </ul>
      
      <button className="my-btn ">
        <Link to="/" style={{color:'rgba(255, 255, 255, 1)'}}>login</Link>
      </button>
      </div>
 

      </div>
    </nav>
  )
}
