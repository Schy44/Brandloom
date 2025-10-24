import Image from "next/image";

export default function IndexImage() {
  return (
    <>
      {/* Hero Section Start*/}
      <div className="hero bg-image parallaxie">
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
                  <h1 className="text-anime-style-2" data-cursor="-opaque">
                    Innovative solutions for{" "}
                    <span className="typed-title" />
                  </h1>
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
                  <a href="/contact" className="btn-default">
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
    </>
  );
}
