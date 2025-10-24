import Image from "next/image";

export default function Projects() {
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
                  Our <span>project</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      project
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
      {/* Page Project Start */}
      <div className="page-project">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              {/* Choose Our Project Nav start */}
              <div
                className="our-Project-nav wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <ul>
                  <li>
                    <a href="#" className="active-btn" data-filter="*">
                      all
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".branding">
                      Branding &amp; Identity
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".web">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".digital">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".analytics">
                      SEO &amp; Analytics
                    </a>
                  </li>
                </ul>
              </div>
              {/* Choose Our Project Nav End */}
            </div>
            <div className="col-lg-12">
              {/* Project Item Boxes start */}
              <div className="row project-item-boxes align-items-center">
                <div className="col-lg-4 col-md-6 project-item-box branding web analytics">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-1.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">web design</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>Dynamic E-commerce Platform</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-lg-4 col-md-6 project-item-box web digital urban">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-2.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">digital marketing</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>innovative identity design</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-lg-4 col-md-6 project-item-box digital branding analytics">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-3.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">SEO &amp; analytics</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>dynamic digital campaign</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-lg-4 col-md-6 project-item-box branding analytics">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-4.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">branding &amp; identity</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>impactful content creation</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-lg-4 col-md-6 project-item-box web service branding">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-5.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">web design</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>visionary growth strategy</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-lg-4 col-md-6 project-item-box digital">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-6.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">branding &amp; identity</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>interactive website redesign</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-lg-4 col-md-6 project-item-box branding web analytics">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-7.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">web design</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>digital solutions platform</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-lg-4 col-md-6 project-item-box web digital urban">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-8.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">digital marketing</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>smart process optimization</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-lg-4 col-md-6 project-item-box digital analytics">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="project-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/project-9.jpg"
                          alt=""
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="project-tag">
                        <a href="/project-single">SEO &amp; analytics</a>
                      </div>
                      <div className="project-btn">
                        <a href="/project-single">
                          <Image
                            src="/images/arrow-white.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>future leaders program</h3>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
              </div>
              {/* Project Item Boxes End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Project End */}
    </>
  );
}
