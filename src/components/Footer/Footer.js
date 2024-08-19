import React from 'react'
import './Footer.css'
function Footer() {
  return (
<>
<footer className="footer text-light  ">
            <div className="branding-section text-center py-3 ">
                <h5 className='font-footer-company-n'><b>Sai Shubham</b><span className="text-primary"><b> Tours & Travel</b></span></h5>
            </div>
            <div className="container">
                <div className="row ml-4 pl-4">
                    <div className="col-md-3  mb-4">
                        <h5 className=' mt-2'><b>Site Map</b></h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light "><i className="fas fa-home"></i> Home</a></li>
                            <li><a href="#" className="text-light "><i className="fas fa-folder-open"></i> About</a></li>
                            <li><a href="#" className="text-light "><i className="fas fa-lock"></i> Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4 ">
                        <h5><b>About Website</b></h5>
                        <p><b>Sai Shubham Tours & Travel </b>is your gateway to unforgettable journeys and adventures.</p>
                        <p> We specialize in crafting personalized travel experiences that cater to your unique preferences and desires. </p>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4 ">
                        <h5><b>Contact</b></h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light"><a href="https://wa.me/8669881059" > <img src='\img\email-logo.png' className='footer-img-height'></img></a>   saishubhamtours8994@gmail.com</a></li>
                            <li><a href="#" className="text-light">   <a href="tel:+91 8669881059" ><img src='\img\icons8-call-48.png' className='footer-img-height'></img></a>        +91 8669881059</a></li>
                            <li><a href="#" className="text-light"> <a href="https://wa.me/8669881059" > <img src='\img\icons8-whatsapp-48.png' className='footer-img-height'></img></a>   chat with saishubhamtours8994</a></li>
                        </ul>
                    </div>
                   
                </div>
            </div>

                <div className="row ">
                    <div className="col text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><i className="fab fa-facebook-f logo-hover-color-f"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><i className="fab fa-twitter logo-hover-color-t"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><i className="fab fa-instagram logo-hover-color-i"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><i className="fab fa-youtube logo-hover-color-y"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
   
        </footer>
        <div className="text-center footer-copyright">
    <small>&copy; 2024 Sai Shubham Tours & Travel. All rights reserved.</small>
  </div>
</>
  )
}

export default Footer
