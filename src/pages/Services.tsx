import React from 'react';
import { RiCheckLine } from 'react-icons/ri';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-700">
            <RiCheckLine className="text-primary mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'MEP Studies',
      description: 'Comprehensive mechanical, electrical, and plumbing system studies for optimal building performance.',
      features: [
        'Load calculations',
        'System analysis',
        'Energy efficiency studies',
        'Feasibility reports'
      ]
    },
    {
      title: 'Civil Works',
      description: 'Expert civil engineering and construction services for various infrastructure projects.',
      features: [
        'Structural design',
        'Construction management',
        'Quality control',
        'Site supervision'
      ]
    },
    {
      title: 'Electrical & Plumbing',
      description: 'Complete electrical and plumbing solutions for residential and commercial buildings.',
      features: [
        'Electrical installations',
        'Plumbing systems',
        'Maintenance services',
        'System upgrades'
      ]
    },
    {
      title: 'Fire Systems',
      description: 'State-of-the-art fire protection systems design and installation.',
      features: [
        'Fire alarm systems',
        'Sprinkler systems',
        'Emergency lighting',
        'Safety compliance'
      ]
    },
    {
      title: 'Solar Panel Installation',
      description: 'Renewable energy solutions with professional solar panel installation services.',
      features: [
        'System design',
        'Panel installation',
        'Performance monitoring',
        'Maintenance'
      ]
    },
    {
      title: 'Design & Planning',
      description: 'Comprehensive design and planning services for construction projects.',
      features: [
        'Architectural design',
        'Project planning',
        'Cost estimation',
        'Timeline management'
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive construction and engineering solutions for your projects
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss your requirements and get a free consultation
            </p>
            <a
              href="/contact"
              className="btn btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
