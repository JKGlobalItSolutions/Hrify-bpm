import React from 'react'
import { Link } from 'react-router-dom'

// import logo from '../assets/logo1.jpg'
import logo from '../assets/logo2.jpg'


const Footer = () => {
  return (
    <div>




        {/* Footer Section */}
<footer className="text-center pt-5 bg-white">
  <div className="container">
    {/* Logo */}
    <div className="mb-3">
      <img src={logo} alt="JK Logo" style={{ width: '70px' }} />
    </div>

    {/* Navigation Links */}
   
    <ul className="list-inline mb-3">
  <li className="list-inline-item mx-2">
    <Link className="text-dark text-decoration-none" to="/">Home</Link>
  </li>
  <li className="list-inline-item mx-2">
    <Link className="text-dark text-decoration-none" to="/services/engineering-manufacturing">Services</Link>
  </li>
  <li className="list-inline-item mx-2">
    <Link className="text-dark text-decoration-none" to="/services/Who-we-are">About Us</Link>
  </li>
  <li className="list-inline-item mx-2">
    <Link className="text-dark text-decoration-none" to="/careers/Hiretalent">Careers</Link>
  </li>
  <li className="list-inline-item mx-2">
    <Link className="text-dark text-decoration-none" to="/contact">Contact</Link>
  </li>
</ul>


  </div>

  {/* Bottom bar */}
  <div className="py-3 text-white" style={{ backgroundColor: '#0080a7' }}>
    <p className="mb-2">© 2025 Hrify BPM. All Rights Reserved</p>
    {/* Social Icons */}
    <div>
      <a href="#" className="text-white mx-2"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
      <a href="#" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
    </div>
  </div>
</footer>








    </div>
  )
}

export default Footer