'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* Let's Work Together start */}
      <div className="footer-work-together">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="work-together-box">
                {/* Work Together Content Start */}
                <div className="work-together-content">
                  <h3>Let's Collaborate</h3>
                  <h2>Let's Work Together</h2>
                </div>
                {/* Work Together Content End */}
                {/* Work Together Btn Start */}
                <div className="work-together-btn">
                  <Link href="/contact">
                    <Image src="/images/arrow-dark.svg" alt="" width={24} height={24} />
                    <span>Get in Touch</span>
                  </Link>
                </div>
                {/* Work Together Btn End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Let's Work Together end */}

      {/* Footer Main Start */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* About Footer start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <Image src="/images/footer-logo.svg" alt="" width={150} height={40} />
                </div>
                {/* Footer Logo End */}

                {/* Footer Contact Box Start */}
                <div className="footer-contact-box">
                  {/* Footer Contact Item Start */}
                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <Image src="/images/icon-phone.svg" alt="" width={24} height={24} />
                    </div>
                    <div className="footer-contact-content">
                      <p>(309) 8855-314</p>
                    </div>
                  </div>
                  {/* Footer Contact Item End */}

                  {/* Footer Contact Item Start */}
                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <Image src="/images/icon-mail.svg" alt="" width={24} height={24} />
                    </div>
                    <div className="footer-contact-content">
                      <p>info@domainname.com</p>
                    </div>
                  </div>
                  {/* Footer Contact Item End */}
                </div>
                {/* Footer Contact Box End */}
              </div>
              {/* About Footer End */}
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              {/* Footer Links start */}
              <div className="footer-links">
                <h3>quick link</h3>
                <ul>
                  <li><Link href="/index-2">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                </ul>
              </div>
              {/* Footer Links end */}
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              {/* Footer Links start */}
              <div className="footer-links">
                <h3>support</h3>
                <ul>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
              {/* Footer Links end */}
            </div>

            <div className="col-lg-4">
              {/* Footer Newsletter Form Start */}
              <div className="footer-newsletter-form">
                <h3>Subscribe our newsletter</h3>
                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input type="email" name="mail" className="form-control" id="mail" placeholder="Enter your email" required />
                    <button type="submit" className="btn-highlighted">subscribe</button>
                  </div>
                </form>
              </div>
              {/* Footer Newsletter Form End */}

              {/* Footer Social Link Start */}
              <div className="footer-social-links">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              {/* Footer Social Link End */}
            </div>
          </div>

          {/* Footer Copyright Section Start */}
          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Footer Copyright Start */}
                <div className="footer-copyright-text">
                  <p>Copyright © 2024 All Rights Reserved.</p>
                </div>
                {/* Footer Copyright End */}
              </div>
            </div>
          </div>
          {/* Footer Copyright Section End */}
        </div>
      </div>
      {/* Footer Main End */}
    </footer>
  );
}
