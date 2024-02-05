import React from 'react'
import BannerImage from '../assets/2blackbean.jpg'
export default function Contact() {
  return (
  <>

  
    <div className="row ">
{/* left side in contact */}
        <div className="col-12 col-lg-6 left" style={{backgroundImage:`url(${BannerImage})`}} ></div>






    {/* right side in contact  */}
        <div className='col-12 col-lg-6 right mt-5'>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-success">Send Message</button>
</form>
       



        </div>
    </div>
  
  </>
  )
}
