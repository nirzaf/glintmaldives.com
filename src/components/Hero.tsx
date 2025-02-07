import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-xl-6 col-lg-8">
            <h1>Welcome to Glint Maldives</h1>
            <h2>Excellence in Civil, Painting, Electrical, Plumbing, Fire Systems & Solar</h2>
          </div>
        </div>

        <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <ServiceBox
            icon="ri-store-line"
            title="MEP Studies"
            link="./mep-studies.html"
          />
          <ServiceBox
            icon="ri-bar-chart-box-line"
            title="System Design"
            link="./mep-system-design.html"
          />
          <ServiceBox
            icon="ri-calendar-todo-line"
            title="Engineering Calculations"
            link="./engineering-calculations.html"
          />
          <ServiceBox
            icon="ri-paint-brush-line"
            title="Planning & Coordination"
            link="./planning-and-coordination.html"
          />
          <ServiceBox
            icon="ri-database-2-line"
            title="Quality Commitment"
            link="./quality-commitment.html"
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceBoxProps {
  icon: string;
  title: string;
  link: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ icon, title, link }) => {
  return (
    <div className="col-xl-2 col-md-4">
      <div className="icon-box">
        <i className={icon}></i>
        <h3><a href={link}>{title}</a></h3>
      </div>
    </div>
  );
};

export default Hero;
