import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <div id="header" className="custom-header navbar-toggleable-md clearfix header-md transparent sticky b-0 disable-uppercase shadow-after-3">
      <header id="topNav">
        <div className="container">
          <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
            <i className="fa fa-bars"></i>
          </button>
            <ul className="float-right nav nav-pills nav-social nav-second-main">
      <li>
        <a href="https://www.twitter.com/stepofweb" target="_blank" className="social-twitter text-center text-white" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Twitter">
          <i className="icon-twitter"></i>
        </a>
      </li>

      <li>
        <a href="https://www.facebook.com/stepofweb" target="_blank" className="social-facebook text-center text-white" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Facebook">
          <i className="icon-facebook"></i>
        </a>
      </li>

    </ul>
    <a className="logo float-left disbale-animation" href="pack-photography-home-1.html">
      <img src="demo_files/images/packs/photography/logo.png" alt="" />
      <img src="demo_files/images/packs/photography/logo-dark.png" alt="" />
    </a>
    <div className="navbar-collapse collapse float-right nav-main-collapse">
      <nav className="nav-main">
        <ul id="topMain" className="nav nav-pills nav-main nav-hover-animate nav-animate-fadeIn">
          <li className="dropdown">
            <a	 className="dropdown-toggle" href="#">
              Home
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="pack-photography-home-1.html">
                  Home 1 [default]
                </a>
              </li>
              <li>
                <a href="pack-photography-home-2.html">
                  Home 2 [styled]
                </a>
              </li>
              <li>
                <a href="pack-photography-home-3.html">
                  Home 3 [revolution slider]
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" href="#">
              Portfolio
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="pack-photography-category.html">
                  Portfolio Category
                </a>
              </li>
              <li>
                <a href="pack-photography-grid-boxed.html">
                  Grid Boxed
                </a>
              </li>
              <li>
                <a href="pack-photography-grid-full.html">
                  Grid Full
                </a>
              </li>
              <li>
                <a href="pack-photography-item-1.html">
                  Project 1
                </a>
              </li>
              <li>
                <a href="pack-photography-item-2.html">
                  Project 2
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown active">
            <a className="dropdown-toggle" href="#">
              About
            </a>
            <ul className="dropdown-menu">
              <li className="active">
                <a href="pack-photography-about-me.html">
                  About Me
                </a>
              </li>
              <li>
                <a href="pack-photography-about-us.html">
                  About Us
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="pack-photography-blog-list.html">
              Blog
            </a>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" href="#">
              Contact
            </a>
            <ul className="dropdown-menu">
              <li >
                <a href="pack-photography-contact-me.html">
                  Contact Me
                </a>
              </li>
              <li>
                <a href="pack-photography-contact-us.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </li>
        </ul>

      </nav>
    </div>

  </div>
</header>
</div>
)

export default Header