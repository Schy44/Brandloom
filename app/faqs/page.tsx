import Image from "next/image";

export default function Faqs() {
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
                  Frequently <span>asked</span> questions
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      frequently asked questions
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
      {/* Page Faqs Start */}
      <div className="page-faqs">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1 order-2">
              {/* Page FAQs Category Start */}
              <div className="page-faqs-catagery">
                {/* FAQs section start */}
                <div
                  className="our-faq-section page-faq-accordion"
                  id="general_information"
                >
                  <div className="section-title">
                    <h2 className="text-anime-style-3">
                      General <span>information</span>
                    </h2>
                  </div>
                  {/* FAQ Accordion Start */}
                  <div className="faq-accordion" id="accordion">
                    {/* FAQ Item Start */}
                    <div className="accordion-item wow fadeInUp">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          What types of projects do you specialize in?
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          How do I start a project with your company?
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Do you offer a free, no obligation quotation?
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          What services do you offer?
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                  </div>
                  {/* FAQ Accordion End */}
                </div>
                {/* FAQs section End */}
                {/* FAQs section start */}
                <div
                  className="our-faq-section page-faq-accordion"
                  id="content_creation_FAQ"
                >
                  <div className="section-title">
                    <h2 className="text-anime-style-3">
                      Content <span>creation</span>
                    </h2>
                  </div>
                  {/* FAQ Accordion Start */}
                  <div className="faq-accordion" id="accordion1">
                    {/* FAQ Item Start */}
                    <div className="accordion-item wow fadeInUp">
                      <h2 className="accordion-header" id="heading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          How do I start a project with your company?
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#accordion1"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <h2 className="accordion-header" id="heading6">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse6"
                          aria-expanded="true"
                          aria-controls="collapse6"
                        >
                          What factors affect the project timeline?
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading6"
                        data-bs-parent="#accordion1"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <h2 className="accordion-header" id="heading7">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse7"
                          aria-expanded="false"
                          aria-controls="collapse7"
                        >
                          What are the key milestones in a construction project?
                        </button>
                      </h2>
                      <div
                        id="collapse7"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading7"
                        data-bs-parent="#accordion1"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                  </div>
                  {/* FAQ Accordion End */}
                </div>
                {/* FAQs section End */}
                {/* FAQs section start */}
                <div
                  className="our-faq-section page-faq-accordion"
                  id="project_management_FAQ"
                >
                  <div className="section-title">
                    <h2 className="text-anime-style-3">
                      Project <span>management</span>
                    </h2>
                  </div>
                  {/* FAQ Accordion Start */}
                  <div className="faq-accordion" id="accordion2">
                    {/* FAQ Item Start */}
                    <div className="accordion-item wow fadeInUp">
                      <h2 className="accordion-header" id="heading8">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          What happens if there are delays in the project?
                        </button>
                      </h2>
                      <div
                        id="collapse8"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading8"
                        data-bs-parent="#accordion2"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <h2 className="accordion-header" id="heading9">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse9"
                          aria-expanded="true"
                          aria-controls="collapse9"
                        >
                          What materials are commonly used in sustainable
                          construction?
                        </button>
                      </h2>
                      <div
                        id="collapse9"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading9"
                        data-bs-parent="#accordion2"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                  </div>
                  {/* FAQ Accordion End */}
                </div>
                {/* FAQs section End */}
                {/* FAQs section start */}
                <div
                  className="our-faq-section page-faq-accordion"
                  id="pricing_payments_FAQ"
                >
                  <div className="section-title">
                    <h2 className="text-anime-style-3">
                      Pricing &amp; <span>payments</span>
                    </h2>
                  </div>
                  {/* FAQ Accordion Start */}
                  <div className="faq-accordion" id="accordion3">
                    {/* FAQ Item Start */}
                    <div className="accordion-item wow fadeInUp">
                      <h2 className="accordion-header" id="heading10">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse10"
                          aria-expanded="false"
                          aria-controls="collapse10"
                        >
                          How do sustainable materials impact energy efficiency?
                        </button>
                      </h2>
                      <div
                        id="collapse10"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading10"
                        data-bs-parent="#accordion3"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <h2 className="accordion-header" id="heading11">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          How can construction contribute to water conservation?
                        </button>
                      </h2>
                      <div
                        id="collapse11"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading11"
                        data-bs-parent="#accordion3"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <h2 className="accordion-header" id="heading12">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse12"
                          aria-expanded="true"
                          aria-controls="collapse12"
                        >
                          What are the main phases of the construction process?
                        </button>
                      </h2>
                      <div
                        id="collapse12"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading12"
                        data-bs-parent="#accordion3"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                    {/* FAQ Item Start */}
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <h2 className="accordion-header" id="heading13">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse13"
                          aria-expanded="false"
                          aria-controls="collapse13"
                        >
                          What permits are required for construction?
                        </button>
                      </h2>
                      <div
                        id="collapse13"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading13"
                        data-bs-parent="#accordion3"
                      >
                        <div className="accordion-body">
                          <p>
                            Our post-construction services gives you peace of
                            mind knowing that we are still here for you even
                            after.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* FAQ Item End */}
                  </div>
                  {/* FAQ Accordion End */}
                </div>
                {/* FAQs section End */}
              </div>
              {/* Page FAQs Category End */}
            </div>
            <div className="col-lg-4 order-lg-2 order-1">
              {/* FAQs Sidebar Start */}
              <div className="faq-sidebar">
                {/* FAQs Category List Start */}
                <div className="faq-catagery-list wow fadeInUp">
                  <ul>
                    <li>
                      <a href="#general_information">general information</a>
                    </li>
                    <li>
                      <a href="#content_creation_FAQ">content creation FAQ</a>
                    </li>
                    <li>
                      <a href="#project_management_FAQ">
                        project management FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#pricing_payments_FAQ">pricing &amp; payments FAQ</a>
                    </li>
                  </ul>
                </div>
                {/* FAQs Category List End */}
                {/* Sidebar Cta Box Start */}
                <div
                  className="sidebar-cta-box wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  {/* Icon Box Start */}
                  <div className="icon-box">
                    <Image src="/images/icon-sidebar-cta.svg" alt="" width={50} height={50} />
                  </div>
                  {/* Icon Box End */}
                  {/* CTA Contact Content Start */}
                  <div className="cta-contact-content">
                    <h3>You have different questions?</h3>
                    <p>
                      Our team will answer all your questions. we ensure a quick
                      response.
                    </p>
                  </div>
                  {/* CTA Contact Content End */}
                  {/* CTA Contact Button Start */}
                  <div className="cta-contact-btn">
                    <a href="tel:3098855314">
                      <Image
                        src="/images/icon-sidebar-cta-phone.svg"
                        alt=""
                        width={30}
                        height={30}
                      />{" "}
                      (30) 8855-314
                    </a>
                  </div>
                  {/* CTA Contact Button End */}
                </div>
                {/* Sidebar Cta Box End */}
              </div>
              {/* Service Sidebar End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Faq End */}
    </>
  );
}
