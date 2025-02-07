import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex items-center justify-center min-h-screen bg-secondary text-white">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex flex-col items-center justify-center text-center" data-aos="fade-up" data-aos-delay="150">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Glint Maldives</h1>
            <h2 className="text-xl md:text-2xl text-gray-300">Excellence in Civil, Painting, Electrical, Plumbing, Fire Systems & Solar</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12" data-aos="zoom-in" data-aos-delay="250">
          <ServiceBox
            icon="ri-store-line"
            title="MEP Studies"
            link="./mep-studies"
          />
          <ServiceBox
            icon="ri-bar-chart-box-line"
            title="System Design"
            link="./mep-system-design"
          />
          <ServiceBox
            icon="ri-calendar-todo-line"
            title="Engineering Calculations"
            link="./engineering-calculations"
          />
          <ServiceBox
            icon="ri-paint-brush-line"
            title="Civil Works"
            link="./civil-works"
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
    <div className="bg-white/10 p-6 rounded-lg hover:bg-primary hover:text-secondary transition-all duration-300">
      <div className="text-4xl mb-4">
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <a href={link} className="inline-block mt-2 text-primary hover:text-white">
        Learn More
      </a>
    </div>
  );
};

export default Hero;
