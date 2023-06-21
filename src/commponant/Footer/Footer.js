import React ,{useState}from 'react'
import "./Footer.css"
import Follow from '../../images/Follow.png'
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png'
import {CaretUp , CaretDown , Facebook , Instagram , Twitter , Linkedin , Youtube} from 'react-bootstrap-icons'

export default function Footer() {

    const [isClose , setClose]=useState(false)


  return (
  <section className="footer">

<div className="my-row" style={{justifyContent:'space-between' , alignItems:'center'}}>
<div className="logo">
          <Link to="/"> <div className="my-row" > <img src={Logo} alt="logo" style={{width:'55px',height:'55px'}} /> {' '} <h2 style={{marginLeft:'5px' , color:'#ffffff'}}>PrimeCRM</h2> </div></Link>  
         
      </div> 
      <div className='share my-row'>
<p><Facebook /></p>
<p><Instagram/></p>
<p><Twitter/></p>
 <p><Linkedin/> </p>
<p><Youtube /> </p>
</div>


</div>
<div className="my-row no1" style={{justifyContent:'center' , alignItems:"flex-start"}}>
<div className="footer-inner" style={{justifyContent:'space-between' , alignItems:"flex-start"}}>
<div className="box"> 
<h5>Usefull Link</h5>
<p>Solution</p>
<p>Industries</p>
<p>Products</p>
<p>Resources</p>
<p>Pricing</p>
</div>
<div className="box"> 
<h5>Service</h5>
<p>Sale</p>
<p>Marketing</p>
<p>Real Estate</p>
<p>Autimotive</p>
<p>Education</p>
</div>

<div className="box">
<h5>Contact Us</h5>
<div className="inner-1">
    <div className="inner-2">
        <p>
    1700 W Blancke St, kiyev 
port south USA, American
</p>
    </div>
</div>


<div className="inner-1">
    <div className="inner-2">
        <p>
    +20 109 825 3130 
    khlyftbdh5@gmail.com
</p></div>
</div>
</div>

</div>

<div className="box box-big">
<h5 style={{justifyContent:'space-between' , alignItems:'center', display:'flex'}}>Our Latest News   <span style={{justifyContent:'space-between' , alignItems:'center', display:'flex' ,marginTop:'7px'}} onClick={()=>setClose(!isClose)}> {isClose? <CaretUp/> :<CaretDown />  } </span></h5>

<div className="inner-3" style={{height:isClose?'0px':'auto' , minHeight:isClose&&'0'}}>
    <div className="inner-4">
    </div>
    <div className="btn-cov">
    <div className="my-btn" style={{backgroundColor:'rgba(255, 255, 255, 0.75)' , cursor:'pointer'}}>Read Now</div>
    </div>
    

</div>
</div>
</div>
  </section>
  )
}
