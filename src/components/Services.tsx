import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, delay = 100 }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="icon-box">
        {imageUrl && (
          <img src={imageUrl} alt={title} className="icon" style={{ width: '100%', height: 'auto' }} />
        )}
        <h4><a href="">{title}</a></h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="row">
          <ServiceCard
            title="WiiHOM Smart Siren"
            description="A loud alarm system that integrates with the WiiHOM ecosystem for security alerts."
            imageUrl="https://res.cloudinary.com/dogglueub/image/upload/c_fit,h_744,q_auto:eco,w_744/v1713582183/OIP_ao0gea.jpg"
          />
          <ServiceCard
            title="Smart Security"
            description="Comprehensive security solutions for residential and commercial properties."
            delay={200}
          />
          <ServiceCard
            title="WiiHOM Smart Wall Outlet"
            description="A wall outlet replacement with built-in smart plug control."
            imageUrl="https://res.cloudinary.com/dogglueub/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1713593325/2024-04-20_09-07-56_dqz3au.png"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
