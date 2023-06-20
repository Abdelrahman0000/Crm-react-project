import React from 'react'
import './Article.css'
import Back from '../../images/back-r.png'
import Q from '../../images/Qu.png'

import Follow from '../../images/fol2.png'

import {Person , ChatDots} from 'react-bootstrap-icons'
import Bl1 from '../../images/bl1.png'
import Bl2 from '../../images/bl2.png'
import Bl3 from '../../images/bl3.png'

export default function Blog({img}) {
    return (
        <section className="blog">
<img src={Back} alt="" className='abs' />
            <div className="title" style={{ width: '100%', textAlign: 'center' }}>

            </div>
            <div className="my-row no1">

                <div className="cards">
                <div className="card2">
      <div className="image"> <img src={img} alt="" />   </div>
<div className="inner">
<p>    <span> <Person />  </span>Admin <span style={{marginLeft: "2rem"}}> <ChatDots />  </span>No Comments   </p>
<h2>6 Tips To Help You Build Your Social Media
Effeciency & Better</h2>

<p>Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. ipsum dolor amet, consectetur adipiscing vestibulum ipsum primis in.</p>


<h2>The Digital Service For All</h2>

<p>Appropriately Empower Dynamic Leadership Skills After Business Portals. Globally My Carminate Interactive Supply Chains With Distinctive Quality Vectors Global Sources Services. Uniquely Matrix Economically Sound Value Through Cooperative Technology. Competently Parallel Task Fully Researched Data And Enterprise Process Improvements.</p>

<ul>
    <li>Listen to what they say about you</li>
<li>Randomised words which.</li>
<li>Internet tend to repeat predefined chunks</li>
</ul>

<div className="all-con">
<img src={Q} alt="" className="my-h" />
 <p> “For the longest time, computers have been associated with work. Mainframes were for the Army, government agencies, and then large companies. Workstations were for engineers and software programmers. PCs were initially for other white-collar jobs.” </p>
</div>

<p style={{ marginBottom: '1.5rem'  }}>Make real time a work improvements</p>
<p style={{ marginBottom: '1.5rem' }}>Collaboratively Administrate Empowered Markets Via Plug-And-Play Networks. Dynamically Procrastinate B2C Users After Installed Base Benefits. Dramatically Visualize Customer Directed Convergence Without Revolutionary ROI.</p>
<p style={{ marginBottom: '1.5rem' }}>1.It brings the right people together with all the right information and tools to get work done</p>
<p style={{ marginBottom: '1.5rem' }}>2.We provide operational efficiency, data security, and flexible scale</p>
<p style={{ marginBottom: '1.5rem' }}>3.Your best work, together in one package that works seamlessly from your computer</p>
<p style={{ marginBottom: '1.5rem' }}>4.Delivers the tools you need to save time Improve field performance always</p>
<div className="my-row" style={{justifyContent:'space-between' , alignItems:'center'}}>
<div className="logo">
         <h3>Share</h3>
      </div> 
<div className="follow">
    <img src={Follow} alt="" />
</div>


</div>

<form action="">
    <h2 style={{ marginBottom: '4rem' , marginTop:'5rem'}}>Leave a Comments</h2>
 <div className="my-row">
    <label htmlFor="">
       <span> *Name </span>
<input type="text" placeholder=' Your Name' />
</label>
<label htmlFor="">
       <span> *Email </span>
<input type="text" placeholder=' Your Email' />
</label>
</div>
<label htmlFor="">
       <span> *Website  </span>
<input type="text" placeholder=' Subject' />

</label>
<label htmlFor="">
       <span> *Message  </span>
<textarea name="" id="" cols="30" rows="10" placeholder='Massege'></textarea>
</label>

<label className="my-label">
<input type="checkbox" />
<span>
Save my name, email, and website in this browser for the next time I comment.</span>
</label>

<div className="btn-cov">
<div className="my-btn">Send Mail</div>
</div>
</form>

</div>


    </div>

                </div>
                <div className="left">
                    <div className="post">
                        <h2>Recent Post</h2>
                        <div className="box-inner my-row ">
                            <div className="inner-left"> <img src={Bl1} alt="" />  </div>
                            <div className="inner-right"> <h5>Tax experts under income-tax lens for valuation
                            </h5>
                                <h6>May 02, 2022       3 min read</h6>
                            </div>
                        </div>

                        <div className="box-inner my-row ">
                            <div className="inner-left"> <img src={Bl2} alt="" />  </div>
                            <div className="inner-right"> <h5>Entrepreneurs Having the Necessary Skill Sets
                            </h5>
                                <h6>May 02, 2022       3 min read</h6>
                            </div>
                        </div>


                        <div className="box-inner my-row ">

                            <div className="inner-left"> <img src={Bl3} alt="" />  </div>
                            <div className="inner-right"> <h5>How to Choose A Tech Stack for Your Startup
                            </h5>
                                <h6>May 02, 2022       3 min read</h6>
                            </div>
                        </div>



                    </div>



                    <div className="cat post">
                        <h2>Categories</h2>
                        
                        <div className="box-inner  ">

                            <h6 className='my-row' style={{ fontSize: '20px', justifyContent: "space-between", alignItems: 'center' }}> <span>ALL</span> <span> (7)</span>
                            </h6>



                        </div>
                        <div className="box-inner  ">

                            <h6 className='my-row' style={{ fontSize: '20px', justifyContent: "space-between", alignItems: 'center' }}> <span>TECHNOLOGY</span> <span> (3)</span>
                            </h6>



                        </div>
                        <div className="box-inner  ">

                            <h6 className='my-row' style={{ fontSize: '20px', justifyContent: "space-between", alignItems: 'center' }}> <span>Business</span> <span> (1)</span>
                            </h6>



                        </div>
                        <div className="box-inner  ">

<h6 className='my-row' style={{ fontSize: '20px', justifyContent: "space-between", alignItems: 'center' }}> <span>Marketing</span> <span> (2)</span>
</h6>



</div>

                    </div>

                </div>

            </div>
        </section>
    )
}
