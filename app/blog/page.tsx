import Image from "next/image";

export default function Blog() {
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
                  Latest <span>blog</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      blog
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
      {/* Page Blog Start */}
      <div className="page-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="/blog-single"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <Image src="/images/post-1.jpg" alt="" width={500} height={500} />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="/blog-single">
                        UI/UX Design Principles for Better User Engagement
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="/blog-single">read more</a>
                  </div>
                  {/* Post Item Readmore Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="/blog-single"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <Image src="/images/post-2.jpg" alt="" width={500} height={500} />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="/blog-single">
                        Why Your Business Needs a Mobile-Optimized Website
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="/blog-single">read more</a>
                  </div>
                  {/* Post Item Readmore Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="/blog-single"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <Image src="/images/post-3.jpg" alt="" width={500} height={500} />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="/blog-single">
                        Content Marketing Essentials for Growing Your Brand
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="/blog-single">read more</a>
                  </div>
                  {/* Post Item Readmore Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.6s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="/blog-single"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <Image src="/images/post-4.jpg" alt="" width={500} height={500} />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="/blog-single">
                        How to Choose the Right Social Media Platforms for Your
                        Brand
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="/blog-single">read more</a>
                  </div>
                  {/* Post Item Readmore Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.8s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="/blog-single"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <Image src="/images/post-5.jpg" alt="" width={500} height={500} />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="/blog-single">
                        Navigating the Digital Landscape Tips for Small
                        Businesses
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="/blog-single">read more</a>
                  </div>
                  {/* Post Item Readmore Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="1s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="/blog-single"
                      className="image-anime"
                      data-cursor-text="View"
                    >
                      <Image src="/images/post-6.jpg" alt="" width={500} height={500} />
                    </a>
                  </figure>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h3>
                      <a href="/blog-single">
                        Web Development Essentials: What Every Business Needs
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="/blog-single">read more</a>
                  </div>
                  {/* Post Item Readmore Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
            <div className="col-lg-12">
              {/* Page Pagination Start */}
              <div
                className="page-pagination wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <ul className="pagination">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-left-long" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Page Pagination End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Blog End */}
    </>
  );
}
