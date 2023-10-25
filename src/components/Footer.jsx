import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-primary ' style={{width:'100%',height:'300px'}}> 
<div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
    <div style={{width:'400px',color:'white'}} className="website">
   <h4> <i class="fa-solid fa-cart-arrow-down fa-bounce"></i>E-cart Shopping </h4>
<h6 >Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
<h6>Code licensed MIT, docs CC BY 3.0.</h6>
<p>Currently v5.3.2.</p>
    </div>
    
    <div className="links d-flex flex-column">
        <h4 style={{color:'white'}}>Links</h4>
        <Link to={'/home'} style={{textDecoration:'none',color:'white',}}>Home</Link>
        <Link to={'/cart'} style={{textDecoration:'none',color:'white',}}>Cart</Link>
        
    </div>

    <div className="guides d-flex flex-column">
        <h4 style={{color:'white'}}>Guides</h4>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white',}}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}>React bootstrap</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}> Routing </Link>
    </div>

    <div className="contact d-flex flex-column">
        <h4 style={{color:'white'}}>Contact Us</h4>
      <div className='d-flex'>  <input className='form-control' placeholder='Enter your Email' />
      <div className='btn btn-primary ms-3'><i class="fa-solid fa-arrow-right fa-beat"></i></div>
      </div>
     <div  className='icons  mt-3 d-flex justify-content-evenly fs-4 '>
            
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white',}}><i class="fa-brands fa-linkedin-in"></i></Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}><i class="fa-brands fa-twitter"></i></Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}> <i class="fa-brands fa-facebook"></i> </Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}><i class="fa-solid fa-envelope"></i> </Link>

     </div>
    </div>

</div>
<p style={{color:'white'}}>Copyright © 2023 E-Cart. Built with React.</p>
    </div>
  )
}

export default Footer