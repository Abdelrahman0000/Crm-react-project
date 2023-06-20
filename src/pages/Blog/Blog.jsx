import React from 'react'
import './Blog.css'
import Card from '../../commponant/Card/Card'
import Back from '../../images/back-r.png'
import Blog1 from '../../images/blog1.png'
import Blog2 from '../../images/blog2.png'
import Blog3 from '../../images/blog3.png'

import Bl1 from '../../images/bl1.png'
import Bl2 from '../../images/bl2.png'
import Bl3 from '../../images/bl3.png'

export default function Blog({setimg}) {
    return (
        <section className="blog">
<img src={Back} alt="" className='abs' />
            <div className="title" style={{ width: '100%', textAlign: 'center' }}>

                <h2 style={{ marginBottom: '1.5rem' }}>Our Journal</h2>
                <p style={{ marginBottom: '1.5rem' }}>Get the latest articles from our journal, writing, discuss and share</p>

            </div>
            <div className="my-row no1">

                <div className="cards">
                    <Card img={Blog1} setimg={setimg} />

                    <Card img={Blog2} setimg={setimg} />
                    <Card img={Blog3} setimg={setimg} />
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
