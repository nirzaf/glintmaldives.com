import React from 'react';
import { RiCheckLine } from 'react-icons/ri';
import Section from './ui/Section';

const services = [
  'MEP Studies and System Design',
  'Drawings & Modeling',
  'Engineering Calculations',
  'Equipment Selection',
  'Method Statements',
  'Planning & Coordination',
  'Supervision As-Built Drawings'
];

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Us"
      subtitle="Your Trusted MEP Solutions Provider"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img
              src="https://ik.imagekit.io/orupgykea/portfolio/portfolio-details-1.jpg?updatedAt=1738958966074"
              alt="About Glint Maldives"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <p className="text-lg text-gray-600 italic">
            We are a leading MEP (mechanical, electrical and plumbing) design and services company catering to the 
            Maldivian market as well as regionally and internationally.
          </p>
          
          <p className="text-gray-600">
            With a vision to deliver reliable, quality solutions that add value, we have been providing innovative and
            technically sound MEP solutions across projects of varying complexity and scale.
          </p>

          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <RiCheckLine className="text-primary mr-2 flex-shrink-0" />
                {service}
              </li>
            ))}
          </ul>

          <p className="text-gray-600">
            Our mission is to provide cutting-edge and environmentally sustainable MEP services that are distinguished
            by technical excellence. We measure our success by the experience we provide - understanding that our work 
            impacts communities and people's lives.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
