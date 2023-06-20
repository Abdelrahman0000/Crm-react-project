import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className="error">
        <div className="error-inner">
            <h1> 404 </h1>
            <h2>Oops! Page not found</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue 
pretium faucibus leo nisl nulla pharetra nullam.</h5>
<div className="btn-cov">
<Link to='/' className="my-btn2">
Go to Homepage
</Link>
</div>
        </div>
    </section>
  )
}
