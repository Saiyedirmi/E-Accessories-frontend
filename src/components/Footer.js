import React from 'react'
import { icons } from 'react-icons'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsYoutube, BsInstagram, BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
   <>
   <footer className="py-4">
    <div className="container-xxl">
      <div classname="row align-items-center">
        <div className="col-5">
          <div className="footer-top-data d-flex gap-30 align-items-center" >
          
        </div>
        </div>
        <div className="col-7">
          <div className="input-group">
            <input
            type="text"
            className="form-control py-1"
            placeholder="Your Email address"
            aria-label="Your Email address"
            aria-describedby="basic-addon2"/>
            <span className="input-group-text p-2" id="basic-addon2">
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className="py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className="text-white mb-4">Contact Us</h4>
          <div>
            <address className="text-white fs-6">
              Hno: 277, Near Vill Chopal <br/>
              Sonipat, Gujarat <br/>
              Pincode: 131103
            </address>
            <a href="tel: +91 9876543210" className="mt-3 d-block mb-3 text-white">
              +91 9876543210
            </a>
            <a href="maito:irmisaiyed@gmail.com" className="mt-3 d-block mb-3 text-white" > 
            irmisaiyed@gmail.com
            </a>
            <div className="social_icons d-flex align-items-center gap-30 mt-4">
              <a className="text-white" href="#">
                <BsLinkedin className="fs-4"/>
              </a>
              <a className="text-white" href="#">
                <BsYoutube className="fs-4"/>
              </a>
              <a className="text-white" href="#">
                <BsInstagram className="fs-4"/>
              </a>
              <a className="text-white" href="#">
                <BsFacebook className="fs-4"/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className="text-white mb-4">Information</h4>
          <div className="footer-links">
            <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link><br/>
            <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link><br/>
            <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link><br/>
            <Link to="/term-and-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
          
          </div>
        </div>
        <div className="col-3">
          <h4 className="text-white mb-4">Account</h4>
          <div className="footer-links">
            <Link className="text-white py-2 mb-1">About</Link><br/>
            <Link className="text-white py-2 mb-1">Faq</Link><br/>
            <Link className="text-white py-2 mb-1">Contact</Link><br/>
          </div>
        </div>
        <div className="col-2">
          <h4 className="text-white mb-4">Quick Links</h4>
          <div className="footer-links">
            <Link className="text-white py-2 mb-1">Laptops</Link><br/>
            <Link className="text-white py-2 mb-1">Headphones</Link><br/>
            <Link className="text-white py-2 mb-1">Tablets</Link><br/>
            <Link className="text-white py-2 mb-1">Watches</Link>
          
          </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className="py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <p className="text-center mb-0 text-white">&copy; { new Date().getFullYear() }; Powered by Developer's Corner</p>
        </div>
      </div>
    </div>
   </footer>
   </>
  )
}

export default Footer