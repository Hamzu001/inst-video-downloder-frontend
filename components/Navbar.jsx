import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger-subtle rounded-bottom-5">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src=".\instagram-new.png" alt="Logo" width="40" height="40" className="mx-3 d-inline-block align-text-center"/>
      <span className="fw-semibold text-danger">Instagram Video Downloader</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
      </ul>
      <form className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="mx-1 nav-link align-text-center active fw-semibold text-danger" aria-current="page" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="mx-2 nav-link active fw-semibold text-danger" aria-current="page" to="/aboutus">About Us</Link>
        </li>
        
      </ul>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
