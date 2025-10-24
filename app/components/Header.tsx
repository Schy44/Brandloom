'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/">
              <Image src="/images/logo.svg" alt="Logo" width={150} height={40} />
            </Link>
            {/* Logo End */}

            {/* Navbar Toggle Start */}
            <input type="checkbox" id="navbar-toggle" className="navbar-toggle-checkbox" />
            <label htmlFor="navbar-toggle" className="navbar-toggle-label">
              <span className="navbar-toggler-icon"></span>
            </label>
            {/* Navbar Toggle End */}

            {/* Main Menu Start */}
            <div className="main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">Home</a>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/index-2">Home - Main</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/index-image">Home - Image</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/index-slider">Home - Slider</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">About Us</Link>
                  </li>
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">Services</a>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" href="/services">Services</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/service-single">Service Details</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">Blog</a>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" href="/blog">Blog</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/blog-single">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">Projects</a>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/project-single">Project Details</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">Team</a>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" href="/team">Team</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/team-single">Team Details</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">Pages</a>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" href="/pricing">Pricing Plan</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/testimonial">Testimonials</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/image-gallery">Image Gallery</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/video-gallery">Video Gallery</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/faqs">FAQs</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/not-found">404</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Main Menu End */}
          </div>
        </nav>
      </div>
    </header>
  );
}
