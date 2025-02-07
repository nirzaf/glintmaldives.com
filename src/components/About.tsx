import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="/assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>Trusted MEP Solutions Provider</h3>
            <p className="fst-italic">
              We are a leading MEP (mechanical, electrical and plumbing) design and services company catering to the Sri
              Lankan market as well as regionally and internationally.
              With a vision to deliver reliable, quality solutions that add value, we have been providing innovative and
              technically sound MEP solutions across projects of varying complexity and scale.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> MEP Studies and System Design</li>
              <li><i className="ri-check-double-line"></i> Drawings & Modeling</li>
              <li><i className="ri-check-double-line"></i> Engineering Calculations</li>
              <li><i className="ri-check-double-line"></i> Equipment Selection</li>
              <li><i className="ri-check-double-line"></i> Method Statements</li>
              <li><i className="ri-check-double-line"></i> Planning & Coordination</li>
              <li><i className="ri-check-double-line"></i> Supervision As-Built Drawings</li>
            </ul>
            <p>
              Our mission is to provide cutting-edge and environmentally sustainable MEP services that are distinguished
              by technical excellence. We measure our success by the experience we provide - understanding that our work 
              impacts communities and people's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
