import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import Button from './ui/Button';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Client Satisfaction', value: '95%' }
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/orupgykea/slide/slide-17.jpg?updatedAt=1738958969651"
          alt="Engineering Excellence"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Engineering Excellence in the{' '}
            <span className="text-primary">Heart of Maldives</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Delivering innovative MEP solutions with precision and reliability.
            Your trusted partner in mechanical, electrical, and plumbing engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
              <RiArrowRightLine className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
