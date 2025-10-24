import Image from "next/image";

export default function ImageGallery() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Image <span>gallery</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      image gallery
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Scrolling Ticker Section Start */}
      <div className="our-scrolling-ticker subpages-scrolling-ticker">
        {/* Scrolling Ticker Start */}
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Custom Branding
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Website Design
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Digital Marketing
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Strategy Consulting
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Analytics &amp; Reporting
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Custom Branding
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Website Design
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Digital Marketing
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Strategy Consulting
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Analytics &amp; Reporting
            </span>
          </div>
          <div className="scrolling-content">
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Custom Branding
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Website Design
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Digital Marketing
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Strategy Consulting
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Analytics &amp; Reporting
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Custom Branding
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Website Design
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Digital Marketing
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Strategy Consulting
            </span>
            <span>
              <Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />
              Analytics &amp; Reporting
            </span>
          </div>
        </div>
      </div>
      {/* Scrolling Ticker Section End */}
      {/* Photo Gallery Section Start */}
      <div className="page-gallery">
        <div className="container">
          {/* gallery section start */}
          <div className="row gallery-items page-gallery-box">
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-cursor-text="View"
              >
                <a href="/images/gallery-1.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-1.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor-text="View"
              >
                <a href="/images/gallery-2.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-2.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="0.4s"
                data-cursor-text="View"
              >
                <a href="/images/gallery-3.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-3.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="0.6s"
                data-cursor-text="View"
              >
                <a href="/images/gallery-4.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-4.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="0.8s"
                data-cursor-text="View"
              >
                <a href="/images/gallery-5.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-5.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="1s"
                data-cursor-text="View"
              >
                <a href="/images/gallery-6.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-6.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="1.2s"
                data-cursor-text="View"
              >
                <a href="/images/gallery-7.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-7.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="1.4s"
                data-cursor-text="View"
              >
                <a href="/images/gallery-8.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-8.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
            <div className="col-lg-4 col-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="1.6s"
                data-cursor-text="View"
              >
                <a href="/images/gallery-9.jpg">
                  <figure className="image-anime">
                    <Image src="/images/gallery-9.jpg" alt="" width={500} height={500} />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>
          </div>
          {/* gallery section end */}
        </div>
      </div>
      {/* Photo Gallery Section End */}
    </>
  );
}
