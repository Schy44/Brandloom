
import Image from "next/image";
import AnimatedText from "./components/AnimatedText";

export default function Home() {
  return (
    <>
      {/* Hero Section Start*/}
      <div className="hero">
        {/* Video Start */}
        <div className="hero-bg-video">
          {/* Selfhosted Video Start */}
          {/* <video autoplay muted loop id="myVideo"><source src="images/hero-bg-video.mp4" type="video/mp4"></video> */}
          <video autoPlay muted loop id="myVideo">
            <source
              src="https://demo.awaikenthemes.com/assets/videos/artistic-video.mp4"
              type="video/mp4"
            />
          </video>
          {/* Selfhosted Video End */}
          {/* Youtube Video Start */}
          {/* <div id="herovideo" className="player" data-property="{videoURL:'74DWwSxsVSs',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
          {/* Youtube Video End */}
        </div>
        {/* Video End */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <div className="typing-title">
                    <p>Digital World</p>
                    <p>Social Marketing</p>
                    <p>Art &amp; Design</p>
                  </div>
                  <AnimatedText
                    className="text-anime-style-2"
                    dataCursor="-opaque"
                    text={(
                      <>
                        Innovative solutions for{" "}
                        <span className="typed-title" />
                      </>
                    )}
                  />
                </div>
                {/* Section Title End */}
                {/* Hero Content Body Start */}
                <div className="hero-content-body">
                  {/* Hero Content Video Start */}
                  <div className="hero-content-video">
                    {/* Video Play Button Start */}
                    <div className="video-play-button">
                      <a
                        href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                        className="popup-video"
                        data-cursor-text="Play"
                      >
                        <i className="fa-solid fa-play" />
                      </a>
                    </div>
                    {/* Video Play Button End */}
                    {/* Learn More Circle Start */}
                    <div className="learn-more-circle">
                      <Image
                        src="/images/learn-more-circle.svg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    {/* Learn More Circle End */}
                  </div>
                  {/* Hero Content Video End */}
                  {/* Hero Video Content Start */}
                  <div className="hero-video-content wow fadeInUp">
                    <p>
                      At our Creative Digital Agency, we bring your ideas to life
                      by crafting engaging, impactful digital experiences that
                      captivate audiences and drive results. From innovative web
                      design to compelling content and cutting-edge digital
                      strategies.
                    </p>
                  </div>
                  {/* Hero Video Content End */}
                </div>
                {/* Hero Content Body End */}
                {/* Hero Button Start */}
                <div className="hero-btn wow fadeInUp" data-wow-delay="0.25s">
                  <a href="#" className="btn-default">
                    get in touch
                  </a>
                </div>
                {/* Hero Button End */}
              </div>
              {/* Hero Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End*/}
      {/* Scrolling Ticker Section Start */}
      <div className="our-scrolling-ticker">
        {/* Scrolling Ticker Start */}
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Custom Branding
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Website Design
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Digital Marketing
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Strategy Consulting
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Analytics &amp; Reporting
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Custom Branding
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Website Design
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Digital Marketing
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Strategy Consulting
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Analytics &amp; Reporting
            </span>
          </div>
          <div className="scrolling-content">
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Custom Branding
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Website Design
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Digital Marketing
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Strategy Consulting
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Analytics &amp; Reporting
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Custom Branding
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Website Design
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Digital Marketing
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Strategy Consulting
            </span>
            <span>
              <Image
                src="/images/asterisk-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Analytics &amp; Reporting
            </span>
          </div>
        </div>
      </div>
      {/* Scrolling Ticker Section End */}
      {/* About Agency Section Start */}
      <div className="about-agency">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* About Agency Content Start */}
              <div className="about-agency-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">about agency</h3>
                  <AnimatedText
                    className="text-anime-style-2"
                    dataCursor="-opaque"
                    text={(
                      <>
                        Crafting <span>unique digital</span> experiences that elevate
                        your brand
                      </>
                    )}
                  />
                </div>
                {/* Section Title End */}
                {/* Section btn Start */}
                <div
                  className="section-btn wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <a href="#" className="btn-default">
                    more about
                  </a>
                </div>
                {/* Section btn End */}
              </div>
              {/* About Agency Content End */}
            </div>
            <div className="col-lg-6">
              {/* About Agency List Start */}
              <div className="about-agency-list">
                {/* About Agency Item Start */}
                <div className="about-agency-item wow fadeInUp">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-about-agency-1.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="agency-item-content">
                    <h3>your success, our mission </h3>
                    <p>
                      We measure our success by the success of our clients. With a
                      focus on results and a dedication to quality, our mission is
                      to deliver digital solutions that make a real impact.
                    </p>
                  </div>
                </div>
                {/* About Agency Item End */}
                {/* About Agency Item Start */}
                <div
                  className="about-agency-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-box">
                    <Image
                      src="/images/icon-about-agency-2.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="agency-item-content">
                    <h3>creators of digital excellence </h3>
                    <p>
                      At the core of our agency is a commitment to excellence and
                      creativity. We specialize in crafting digital solutions that
                      not only meet your needs but also elevate your brand.
                    </p>
                  </div>
                </div>
                {/* About Agency Item End */}
                {/* About Agency Item Start */}
                <div
                  className="about-agency-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-box">
                    <Image
                      src="/images/icon-about-agency-3.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="agency-item-content">
                    <h3>innovating the digital landscape</h3>
                    <p>
                      Founded on a passion for creativity and technology, we are a
                      team of dedicated digital experts committed to transforming
                      the way brands connect with audiences.
                    </p>
                  </div>
                </div>
                {/* About Agency Item End */}
                {/* About Agency Item Start */}
                <div
                  className="about-agency-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon-box">
                    <Image
                      src="/images/icon-about-agency-4.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="agency-item-content">
                    <h3>helping brands thrive online</h3>
                    <p>
                      Our purpose is simple: to help brands succeed in the digital
                      age. We're passionate about building strong relationships
                      with our clients and crafting custom strategies that drive
                      results.
                    </p>
                  </div>
                </div>
                {/* About Agency Item End */}
              </div>
              {/* About Agency List End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}
      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Our services</h3>
                                  <AnimatedText
                                    className="text-anime-style-2"
                                    dataCursor="-opaque"
                                    text={(
                                      <>
                                        Our <span>digital services</span> to grow your brand
                                      </>
                                    )}
                                  />              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5">
              {/* Section Content Button Start */}
              <div className="section-content-btn">
                {/* Section Title Content Start */}
                <div
                  className="section-title-content wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <p>
                    Our digital services empower brands with innovative
                    strategies and solutions for sustainable growth and
                    engagement.
                  </p>
                </div>
                {/* Section Title Content End */}
                {/* Section Button Start */}
                <div
                  className="section-btn wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <a href="#" className="btn-default">
                    all services
                  </a>
                </div>
                {/* Section Button End */}
              </div>
              {/* Section Content Button End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp">
                {/* Service Item Header Start */}
                <div className="service-item-header">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-service-1.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="service-arrow">
                    <a href="#">
                      <Image
                        src="/images/arrow-accent.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
                {/* Service Item Header End */}
                {/* Service Item Body Start */}
                <div className="service-item-body">
                  <h3>branding and identity</h3>
                  <p>
                    Developing a compelling brand identity through strategy,
                    visuals, and to build strong customer connections.
                  </p>
                </div>
                {/* Service Item Body End */}
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Service Item Header Start */}
                <div className="service-item-header">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-service-2.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="service-arrow">
                    <a href="#">
                      <Image
                        src="/images/arrow-accent.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
                {/* Service Item Header End */}
                {/* Service Item Body Start */}
                <div className="service-item-body">
                  <h3>digital marketing</h3>
                  <p>
                    Developing a compelling brand identity through strategy,
                    visuals, and to build strong customer connections.
                  </p>
                </div>
                {/* Service Item Body End */}
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Service Item Header Start */}
                <div className="service-item-header">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-service-3.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="service-arrow">
                    <a href="#">
                      <Image
                        src="/images/arrow-accent.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
                {/* Service Item Header End */}
                {/* Service Item Body Start */}
                <div className="service-item-body">
                  <h3>creative content production</h3>
                  <p>
                    Developing a compelling brand identity through strategy,
                    visuals, and to build strong customer connections.
                  </p>
                </div>
                {/* Service Item Body End */}
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-lg-12">
              <div
                className="service-footer wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  Let's make something great work together.{" "}
                  <a href="#">get free quote</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}
      {/* Digital Success Section Start */}
      <div className="digital-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Digital Success Box Start */}
              <div className="digital-success-box">
                {/* Digital Success Content Start */}
                <div className="digital-success-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                                      <AnimatedText
                                        className="text-anime-style-2"
                                        dataCursor="-opaque"
                                        text={(
                                          <>
                                            Expertise that drives digital <span>success</span>
                                          </>
                                        )}
                                      />                  </div>
                  {/* Section Title End */}
                  {/* Success Counter Box Start */}
                  <div className="success-counter-box">
                    {/* Success Counter Item Start */}
                    <div className="success-counter-item">
                      <h2>
                        +<span className="counter">60</span>%
                      </h2>
                      <p>By optimizing your website for search engines.</p>
                    </div>
                    {/* Success Counter Item End */}
                    {/* Success Counter Item Start */}
                    <div className="success-counter-item">
                      <h2>
                        +<span className="counter">30</span>%
                      </h2>
                      <p>
                        Rise in revenue as more visitors convert into paying
                        customers.
                      </p>
                    </div>
                    {/* Success Counter Item End */}
                  </div>
                  {/* Success Counter Box End */}
                </div>
                {/* Digital Success Content End */}
                <div className="digital-success-list">
                  <div className="success-list-item wow fadeInUp">
                    <p>
                      <span>Social Media Management:</span> Our social media
                      management services focus on building and enhancing your
                      brand's online presence. We create engaging content, manage
                      your social media accounts, and analyze performance.
                    </p>
                  </div>
                  <div
                    className="success-list-item wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <p>
                      <span>E-commerce Solutions:</span> Our e-commerce solutions
                      are designed to create seamless online shopping
                      experiences. From user-friendly website design to secure
                      payment processing and inventory management.
                    </p>
                  </div>
                </div>
              </div>
              {/* Digital Success Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Digital Success Section End */}
      {/* Why Choose us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose</h3>
                                  <AnimatedText
                                    className="text-anime-style-2"
                                    dataCursor="-opaque"
                                    text={(
                                      <>
                                        Expertise for <span>your digital</span> growth journey
                                      </>
                                    )}
                                  />              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5">
              {/* Section Title Content Start */}
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  Our dedicated team is committed to understanding your unique
                  needs, ensuring that we provide innovative strategies that
                  drive results. With a focus on quality and integrity.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Why Choose Content Start */}
              <div className="why-choose-content">
                {/* Why Choose Item Start */}
                <div className="why-choose-item active wow fadeInUp">
                  <h3>Data-driven Approach</h3>
                  <p>
                    We leverage data and insights to make informed decisions that
                    lead to more effective and efficient solutions.
                  </p>
                </div>
                {/* Why Choose Item End */}
                {/* Why Choose Item Start */}
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <h3>Competitive Pricing</h3>
                  <p>
                    We offer our top-quality services at competitive prices,
                    providing you with great value for your investment.
                  </p>
                </div>
                {/* Why Choose Item End */}
                {/* Why Choose Item Start */}
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h3>Ethical Business Practices</h3>
                  <p>
                    We maintain the highest level of professionalism and ethical
                    standards professionalism in all our business dealings.
                  </p>
                </div>
                {/* Why Choose Item End */}
              </div>
              {/* Why Choose Content End */}
            </div>
            <div className="col-lg-6">
              {/* Why Choose Image Start */}
              <div className="why-choose-image">
                <figure className="image-anime reveal">
                  <Image
                    src="/images/why-choose-image.jpg"
                    alt=""
                    width={500}
                    height={500}
                  />
                </figure>
              </div>
              {/* Why Choose Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose us Section End */}
      {/* Join Agency Section Start */}
      <div className="join-agency">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">join agency</h3>
                                  <AnimatedText
                                    className="text-anime-style-2"
                                    dataCursor="-opaque"
                                    text={(
                                      <>
                                        Join our <span>agency</span> of creative innovators
                                      </>
                                    )}
                                  />              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5">
              {/* Section Title Content Start */}
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  Join our creative community to collaborate, innovate, and
                  thrive together We welcome passionate individuals eager to
                  make.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Agency Social Item Start */}
              <div className="agency-social-item wow fadeInUp">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </div>
                {/* Icon Box End */}
                {/* Agency Social Content Start */}
                <div className="agency-social-content">
                  <h3>Follow us on Twitter</h3>
                  <p>@artistic_official</p>
                </div>
                {/* Agency Social Content End */}
                {/* Social Readmore Button Start */}
                <div className="agency-social-btn">
                  <a href="#" className="readmore-btn">
                    <Image
                      src="/images/arrow-white.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                {/* Social Readmore Button End */}
              </div>
              {/* Agency Social Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Agency Social Item Start */}
              <div
                className="agency-social-item wow fadeInUp"
                data-wow-delay="0.25s"
              >
                {/* Icon Box Start */}
                <div className="icon-box">
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </div>
                {/* Icon Box End */}
                {/* Agency Social Content Start */}
                <div className="agency-social-content">
                  <h3>Join us on Linked in</h3>
                  <p>user.artistic_official</p>
                </div>
                {/* Agency Social Content End */}
                {/* Social Readmore Button Start */}
                <div className="agency-social-btn">
                  <a href="#" className="readmore-btn">
                    <Image
                      src="/images/arrow-white.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                {/* Social Readmore Button End */}
              </div>
              {/* Agency Social Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Agency Social Item Start */}
              <div
                className="agency-social-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* Icon Box Start */}
                <div className="icon-box">
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
                {/* Icon Box End */}
                {/* Agency Social Content Start */}
                <div className="agency-social-content">
                  <h3>Follow on Instagram</h3>
                  <p>@artistic_insta_official</p>
                </div>
                {/* Agency Social Content End */}
                {/* Social Readmore Button Start */}
                <div className="agency-social-btn">
                  <a href="#" className="readmore-btn">
                    <Image
                      src="/images/arrow-white.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                {/* Social Readmore Button End */}
              </div>
              {/* Agency Social Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Join Agency Section End */}
      {/* How It Work Section Start */}
      <div className="how-it-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">how it work</h3>
                                  <AnimatedText
                                    className="text-anime-style-2"
                                    dataCursor="-opaque"
                                    text={(
                                      <>
                                        Our proven <span>process</span> for achieving success
                                      </>
                                    )}
                                  />              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5">
              {/* Section Title Content Start */}
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  Our proven process combines research, strategy, and creativity
                  to deliver tailored solutions that drive measurable results.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Work Process Item Start */}
              <div className="work-process-item wow fadeInUp">
                {/* Work Process Header Start */}
                <div className="work-process-header">
                  {/* Work Process Title Start */}
                  <div className="work-process-title">
                    <h3>discovery phase</h3>
                  </div>
                  {/* Work Process Title End */}
                  {/* Work Process Button Start */}
                  <div className="work-process-btn">
                    <a href="#" className="readmore-btn">
                      <Image
                        src="/images/arrow-white.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                  {/* Work Process Button End */}
                </div>
                {/* Work Process Header End */}
                {/* Work Process Content Start */}
                <div className="work-process-content">
                  <p>
                    Initial consultation to understand your brand, goals, and
                    target audience Conducting research and analysis of market
                    trends.
                  </p>
                </div>
                {/* Work Process Content End */}
                {/* Work Process Body Start */}
                <div className="work-process-body">
                  {/* Work Process Number Start */}
                  <div className="work-process-no">
                    <h3>step</h3>
                    <h2>01</h2>
                  </div>
                  {/* Work Process Number End */}
                  {/* Work Process Icon Box Start */}
                  <div className="work-process-icon-box">
                    <Image
                      src="/images/icon-work-process-1.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* Work Process Icon Box End */}
                </div>
                {/* Work Process Body End */}
              </div>
              {/* Work Process Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Work Process Item Start */}
              <div
                className="work-process-item wow fadeInUp"
                data-wow-delay="0.25s"
              >
                {/* Work Process Header Start */}
                <div className="work-process-header">
                  {/* Work Process Title Start */}
                  <div className="work-process-title">
                    <h3>implementation</h3>
                  </div>
                  {/* Work Process Title End */}
                  {/* Work Process Button Start */}
                  <div className="work-process-btn">
                    <a href="#" className="readmore-btn">
                      <Image
                        src="/images/arrow-white.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                  {/* Work Process Button End */}
                </div>
                {/* Work Process Header End */}
                {/* Work Process Content Start */}
                <div className="work-process-content">
                  <p>
                    Initial consultation to understand your brand, goals, and
                    target audience Conducting research and analysis of market
                    trends.
                  </p>
                </div>
                {/* Work Process Content End */}
                {/* Work Process Body Start */}
                <div className="work-process-body">
                  {/* Work Process Number Start */}
                  <div className="work-process-no">
                    <h3>step</h3>
                    <h2>02</h2>
                  </div>
                  {/* Work Process Number End */}
                  {/* Work Process Icon Box Start */}
                  <div className="work-process-icon-box">
                    <Image
                      src="/images/icon-work-process-2.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* Work Process Icon Box End */}
                </div>
                {/* Work Process Body End */}
              </div>
              {/* Work Process Item End */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Work Process Item Start */}
              <div
                className="work-process-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* Work Process Header Start */}
                <div className="work-process-header">
                  {/* Work Process Title Start */}
                  <div className="work-process-title">
                    <h3>collaboration</h3>
                  </div>
                  {/* Work Process Title End */}
                  {/* Work Process Button Start */}
                  <div className="work-process-btn">
                    <a href="#" className="readmore-btn">
                      <Image
                        src="/images/arrow-white.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                  {/* Work Process Button End */}
                </div>
                {/* Work Process Header End */}
                {/* Work Process Content Start */}
                <div className="work-process-content">
                  <p>
                    Initial consultation to understand your brand, goals, and
                    target audience Conducting research and analysis of market
                    trends.
                  </p>
                </div>
                {/* Work Process Content End */}
                {/* Work Process Body Start */}
                <div className="work-process-body">
                  {/* Work Process Number Start */}
                  <div className="work-process-no">
                    <h3>step</h3>
                    <h2>03</h2>
                  </div>
                  {/* Work Process Number End */}
                  {/* Work Process Icon Box Start */}
                  <div className="work-process-icon-box">
                    <Image
                      src="/images/icon-work-process-3.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* Work Process Icon Box End */}
                </div>
                {/* Work Process Body End */}
              </div>
              {/* Work Process Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* How It Work Section End */}
      {/* Our Features Start */}
      <div className="our-features">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">features</h3>
                                  <AnimatedText
                                    className="text-anime-style-2"
                                    dataCursor="-opaque"
                                    text={(
                                      <>
                                        Innovative <span>features</span> for your digital success
                                      </>
                                    )}
                                  />              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-6">
              {/* Section Content Button Start */}
              <div className="section-content-btn">
                {/* Section Title Content Start */}
                <div
                  className="section-title-content wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <p>
                    Our digital services empower brands with innovative
                    strategies and solutions for sustainable growth and
                    engagement.
                  </p>
                </div>
                {/* Section Title Content End */}
                {/* Section Button Start */}
                <div
                  className="section-btn wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <a href="#" className="btn-default">
                    leran more
                  </a>
                </div>
                {/* Section Button End */}
              </div>
              {/* Section Content Button End */}
            </div>
          </div>
          <div className="col-lg-12">
            {/* Digital Features Box Start */}
            <div className="digital-features-box">
              {/* Digital Features Item Start */}
              <div className="digital-features-item features-item-1 wow fadeInUp">
                {/* Digital Features Image Start */}
                <div className="digital-features-image">
                  <figure className="image-anime">
                    <Image
                      src="/images/digital-features-img-1.jpg"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </figure>
                </div>
                {/* Digital Features Image End */}
                {/* Digital Features Content Start */}
                <div className="digital-features-content">
                  <h3>custom branding solutions</h3>
                  <p>
                    Unique brand identity development, including logos, color
                    palettes.
                  </p>
                </div>
                {/* Digital Features Content End */}
              </div>
              {/* Digital Features Item End */}
              {/* Digital Features Item Start */}
              <div
                className="digital-features-item features-item-2 wow fadeInUp"
                data-wow-delay="0.25s"
              >
                {/* Digital Features Image Start */}
                <div className="digital-features-image">
                  <figure className="image-anime">
                    <Image
                      src="/images/digital-features-img-2.jpg"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </figure>
                </div>
                {/* Digital Features Image End */}
                {/* Digital Features Content Start */}
                <div className="digital-features-content">
                  <h3>data-driven digital marketing</h3>
                  <p>Strategies combining SEO, PPC, content marketing</p>
                </div>
                {/* Digital Features Content End */}
              </div>
              {/* Digital Features Item End */}
              {/* Agency Support Start */}
              <div className="digital-features-item agency-supports">
                {/* Agency Support Header Start */}
                <div className="agency-supports-header">
                  {/* Agency Support Content Start */}
                  <div className="agency-supports-content wow fadeInUp">
                    <h3>Content Creation and Strategy</h3>
                    <p>
                      High-quality, engaging content across blogs, videos, and
                      graphics designed to captivate and retain audiences.
                    </p>
                  </div>
                  {/* Agency Support Content End */}
                  {/* Agency Free Consultation Start */}
                  <div className="agency-free-consultation">
                    <Image
                      src="/images/free-consultation-circle.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  {/* Agency Free Consultation End */}
                </div>
                {/* Agency Support Header End */}
                {/* Agency Support Slider Start */}
                <div className="agency-supports-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Agency Support Logo Start */}
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <Image
                            src="/images/agency-supports-logo-1.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                      {/* Agency Support Logo End */}
                      {/* Agency Support Logo Start */}
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <Image
                            src="/images/agency-supports-logo-2.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                      {/* Agency Support Logo End */}
                      {/* Agency Support Logo Start */}
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <Image
                            src="/images/agency-supports-logo-3.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                      {/* Agency Support Logo End */}
                      {/* Agency Support Logo Start */}
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <Image
                            src="/images/agency-supports-logo-4.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                      {/* Agency Support Logo End */}
                      {/* Agency Support Logo Start */}
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <Image
                            src="/images/agency-supports-logo-5.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                      {/* Agency Support Logo End */}
                      {/* Agency Support Logo Start */}
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <Image
                            src="/images/agency-supports-logo-6.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                      {/* Agency Support Logo End */}
                      {/* Agency Support Logo Start */}
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <Image
                            src="/images/agency-supports-logo-3.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                      {/* Agency Support Logo End */}
                      {/* Agency Support Logo Start */}
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <Image
                            src="/images/agency-supports-logo-5.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                      {/* Agency Support Logo End */}
                    </div>
                  </div>
                </div>
                {/* Agency Support Slider End */}
              </div>
              {/* Agency Support End */}
            </div>
            {/* Digital Features Box End */}
          </div>
        </div>
      </div>
      {/* Our Features End */}
      {/* Our Portfolio Section Start */}
      <div className="our-portfolio">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">portfolio</h3>
                                  <AnimatedText
                                    className="text-anime-style-2"
                                    dataCursor="-opaque"
                                    text={(
                                      <>
                                        Brands with cutting-edge digital{" "}
                                        <span>solutions &amp; design</span>
                                      </>
                                    )}
                                  />              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5">
              {/* Section Title Content Start */}
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  Empowering brands through innovative digital strategies,
                  immersive design, and tailored solutions that drive growth and
                  engagement.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
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
                        <a href="#">web design</a>
                      </div>
                      <div className="project-btn">
                        <a href="#">
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
                        <a href="#">digital marketing</a>
                      </div>
                      <div className="project-btn">
                        <a href="#">
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
                <div className="col-lg-4 col-md-6 project-item-box digital analytics">
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
                        <a href="#">SEO &amp; analytics</a>
                      </div>
                      <div className="project-btn">
                        <a href="#">
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
                        <a href="#">branding &amp; identity</a>
                      </div>
                      <div className="project-btn">
                        <a href="#">
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
                        <a href="#">web design</a>
                      </div>
                      <div className="project-btn">
                        <a href="#">
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
                        <a href="#">branding &amp; identity</a>
                      </div>
                      <div className="project-btn">
                        <a href="#">
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
              </div>
              {/* Project Item Boxes End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Portfolio Section End */}
      {/* Our Testimonial Section Start */}
      <div className="our-testimonial">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">testimonials</h3>
                                  <AnimatedText
                                    className="text-anime-style-2"
                                    dataCursor="-opaque"
                                    text={(
                                      <>
                                        Read what they have to say about{" "}
                                        <span>working with us</span>
                                      </>
                                    )}
                                  />              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5">
              {/* Section Content Button Start */}
              <div className="section-content-btn">
                {/* Section Title Content Start */}
                <div
                  className="section-title-content wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <p>
                    Discover how our clients have achieved success through our
                    innovative solutions and dedicated support.
                  </p>
                </div>
                {/* Section Title Content End */}
                {/* Section Button Start */}
                <div
                  className="section-btn wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <a href="#" className="btn-default">
                    all testimonials
                  </a>
                </div>
                {/* Section Button End */}
              </div>
              {/* Section Content Button End */}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              {/* Testimonial Review Box Start */}
              <div className="testimonial-review-box">
                {/* Testimonial Review Header Start */}
                <div className="testimonial-review-header">
                  <h2>
                    <span className="counter">4.9</span>
                  </h2>
                  <div className="testimonial-rating">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <p>(40+ Reviews)</p>
                </div>
                {/* Testimonial Review Header End */}
                {/* Testimonial Review Content Start */}
                <div className="testimonial-review-content wow fadeInUp">
                  <h3>Customer experiences that speak for themselves</h3>
                </div>
                {/* Testimonial Review Content End */}
                {/* Testimonial Review Image Start */}
                <div className="testimonial-review-image">
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <Image
                        src="/images/satisfy-client-img-1.jpg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <Image
                        src="/images/satisfy-client-img-2.jpg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <Image
                        src="/images/satisfy-client-img-3.jpg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <Image
                        src="/images/satisfy-client-img-4.jpg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <Image
                        src="/images/satisfy-client-img-5.jpg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </figure>
                  </div>
                </div>
                {/* Testimonial Review Image End */}
              </div>
              {/* Testimonial Review Box End */}
            </div>
            <div className="col-lg-8">
              {/* Testimonial Slider Start */}
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-company-logo">
                          <Image
                            src="/images/icon-testimonial-logo.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="testimonial-content">
                          <p>
                            The team transformed our brand's online presence with
                            creativity and precision. The results exceeded our
                            expectations! Their digital marketing strategies
                            helped us reach a broader audience and significantly
                            boosted our sales.
                          </p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <Image
                                src="/images/author-1.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Sarah Mitchell</h3>
                            <p>Marketing Director</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-company-logo">
                          <Image
                            src="/images/icon-testimonial-logo.svg"
                            alt=""
                            width={100}
                            height={50}
                          />
                        </div>
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="testimonial-content">
                          <p>
                            The team transformed our brand's online presence with
                            creativity and precision. The results exceeded our
                            expectations! Their digital marketing strategies
                            helped us reach a broader audience and significantly
                            boosted our sales.
                          </p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <Image
                                src="/images/author-2.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Sarah Mitchell</h3>
                            <p>Marketing Director</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                  </div>
                  <div className="testimonial-btn">
                    <div className="testimonial-button-prev" />
                    <div className="testimonial-button-next" />
                  </div>
                </div>
              </div>
              {/* Testimonial Slider End */}
            </div>
            <div className="col-lg-12">
              {/* Testimonial Benefits Box Start */}
              <div className="testimonial-benefits-box">
                {/* Testimonial Benefits Item Start */}
                <div className="testimonial-benefits-item wow fadeInUp">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-testimonial-benefits-1.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="testimonial-benefits-content">
                    <h3>Low Cost</h3>
                    <ul>
                      <li>Competitive fee</li>
                      <li>Flexible rates</li>
                    </ul>
                  </div>
                </div>
                {/* Testimonial Benefits Item End */}
                {/* Testimonial Benefits Item Start */}
                <div
                  className="testimonial-benefits-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-box">
                    <Image
                      src="/images/icon-testimonial-benefits-2.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="testimonial-benefits-content">
                    <h3>Permission Less</h3>
                    <ul>
                      <li>Open for integration</li>
                      <li>Run your own nodes</li>
                    </ul>
                  </div>
                </div>
                {/* Testimonial Benefits Item End */}
                {/* Testimonial Benefits Item Start */}
                <div
                  className="testimonial-benefits-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-box">
                    <Image
                      src="/images/icon-testimonial-benefits-3.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="testimonial-benefits-content">
                    <h3>Secure Data</h3>
                    <ul>
                      <li>Open source sheet</li>
                      <li>360 Security</li>
                    </ul>
                  </div>
                </div>
                {/* Testimonial Benefits Item End */}
                {/* Testimonial Benefits Item Start */}
                <div
                  className="testimonial-benefits-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon-box">
                    <Image
                      src="/images/icon-testimonial-benefits-4.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="testimonial-benefits-content">
                    <h3>24 X 7 Support</h3>
                    <ul>
                      <li>Toll free number</li>
                      <li>Ticket systems</li>
                    </ul>
                  </div>
                </div>
                {/* Testimonial Benefits Item End */}
              </div>
              {/* Testimonial Benefits Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonial Section End */}
      {/* Agency Benefits Section Start */}
      <div className="agency-benefits">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">key benefits</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Discover the <span>benefits</span> of choosing us today</h2>              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5">
              {/* Section Title Content Start */}
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  Experience unparalleled creativity, data-driven strategies, and
                  dedicated support that drive real results for your brand.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Benefits Steps Item Start */}
              <div className="benefits-steps-item wow fadeInUp">
                <div className="benefits-steps-no">
                  <h3>01</h3>
                </div>
                <div className="icon-box">
                  <Image
                    src="/images/icon-benefits-steps-1.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="benefits-steps-content">
                  <h3>Personalized Approach</h3>
                  <p>
                    We customize strategies to fit your brand's specific needs,
                    ensuring alignment.
                  </p>
                </div>
              </div>
              {/* Benefits Steps Item End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Benefits Steps Item Start */}
              <div
                className="benefits-steps-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="benefits-steps-no">
                  <h3>02</h3>
                </div>
                <div className="icon-box">
                  <Image
                    src="/images/icon-benefits-steps-2.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="benefits-steps-content">
                  <h3>experienced team</h3>
                  <p>
                    Combines industry knowledge and creativity to exceptional
                    results for your brand.
                  </p>
                </div>
              </div>
              {/* Benefits Steps Item End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Benefits Steps Item Start */}
              <div
                className="benefits-steps-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="benefits-steps-no">
                  <h3>03</h3>
                </div>
                <div className="icon-box">
                  <Image
                    src="/images/icon-benefits-steps-1.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="benefits-steps-content">
                  <h3>data-driven decisions</h3>
                  <p>
                    We utilize data insights to refine strategies, optimize and
                    ensure impactful, measurable results.
                  </p>
                </div>
              </div>
              {/* Benefits Steps Item End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Benefits Steps Item Start */}
              <div
                className="benefits-steps-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="benefits-steps-no">
                  <h3>04</h3>
                </div>
                <div className="icon-box">
                  <Image
                    src="/images/icon-benefits-steps-4.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="benefits-steps-content">
                  <h3>ongoing support</h3>
                  <p>
                    We provide continuous support and maintenance to keep your
                    digital assets at their best.
                  </p>
                </div>
              </div>
              {/* Benefits Steps Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Agency Benefits Section End */}
      {/* Our Blog Section Start */}
      <div className="our-blog">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">latest news</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Insights on digital <span>innovation</span> and growth
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-5">
              {/* Section Title Content Start */}
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  Explore the latest trends, strategies, and tools driving
                  digital innovation and helping businesses thrive in a rapidly
                  evolving digital landscape.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <a
                      href="#"
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
                      <a href="#">
                        UI/UX Design Principles for Better User Engagement
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="#">read more</a>
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
                      href="#"
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
                      <a href="#">
                        Why Your Business Needs a Mobile-Optimized Website
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="#">read more</a>
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
                      href="#"
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
                      <a href="#">
                        Content Marketing Essentials for Growing Your Brand
                      </a>
                    </h3>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Readmore Button Start*/}
                  <div className="post-item-btn">
                    <a href="#">read more</a>
                  </div>
                  {/* Post Item Readmore Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Blog Section End */}
      
    </>
  );
}
