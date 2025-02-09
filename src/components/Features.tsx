import React from 'react';
import { RiLightbulbLine, RiRocketFill, RiToolsFill, RiShieldStarFill } from 'react-icons/ri';
import Section from './ui/Section';

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description }) => {
  return (
    <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-tr-[100px] -z-10 group-hover:bg-secondary/10 transition-colors duration-300" />

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-3xl">{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </div>
  );
};

const features = [
  {
    icon: <RiLightbulbLine />,
    title: "Vision",
    description: "To provide quality solutions that add value to our environment and society, ensuring reliability and customer confidence. Our vision is to supply services that meet customer requirements at all times."
  },
  {
    icon: <RiRocketFill />,
    title: "Mission",
    description: "To provide comprehensive mechanical, electrical & plumbing services for the Maldives market and regionally/internationally. We offer innovative solutions that are technically sound and environmentally correct."
  },
  {
    icon: <RiToolsFill />,
    title: "Services",
    description: "We perform MEP studies, design, drawings, modeling, review, engineering calculations, equipment selection, method statements, submittals, planning/coordination, supervision for projects ranging from houses to infrastructure."
  },
  {
    icon: <RiShieldStarFill />,
    title: "Objectives",
    description: "Reduce gap between consultants and contractors; deliver quality services; effective complaint handling; enhance staff qualifications; open new markets locally and abroad; provide advanced, modern, excellent designs for different sectors."
  }
];

const Features: React.FC = () => {
  return (
    <Section
      id="features"
      title="Why Choose Us"
      subtitle="Our Core Values and Commitments"
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Grid Layout */}
      <div className="relative grid gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            {...feature}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
        {[
          { value: '10+', label: 'Years Experience' },
          { value: '200+', label: 'Projects Completed' },
          { value: '50+', label: 'Expert Engineers' },
          { value: '95%', label: 'Client Satisfaction' }
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center transition-all duration-500 hover:-translate-y-1"
          >
            <div className="mb-2 text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
