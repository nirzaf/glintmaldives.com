import React from 'react';
import { RiLightbulbLine, RiFlag2Fill, RiToolsFill, RiShieldStarFill } from 'react-icons/ri';
import Section from './ui/Section';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:-translate-y-2">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-lg transition-transform duration-300 group-hover:scale-110">
          <div className="text-3xl">{icon}</div>
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 h-20 w-20 rounded-full border border-white/10 opacity-50" />
        <div className="absolute bottom-4 left-4 h-16 w-16 rounded-full border border-white/10 opacity-50" />
      </div>

      {/* Hover Effect */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

const values = [
  {
    title: "Vision",
    description: "To provide quality solutions that add value to our environment and society, ensuring reliability and customer confidence. Our vision is to supply services that meet customer requirements at all times.",
    icon: <RiLightbulbLine />,
    imageUrl: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-1.jpg?updatedAt=1738958960932"
  },
  {
    title: "Mission",
    description: "To provide comprehensive mechanical, electrical & plumbing services for the Maldives market and regionally/internationally. We offer innovative solutions that are technically sound and environmentally correct.",
    icon: <RiFlag2Fill />,
    imageUrl: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-2.jpg?updatedAt=1738958964660"
  },
  {
    title: "Services",
    description: "We perform MEP studies, design, drawings, modeling, review, engineering calculations, equipment selection, method statements, submittals, planning/coordination, supervision for projects ranging from houses to infrastructure.",
    icon: <RiToolsFill />,
    imageUrl: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-3.jpg?updatedAt=1738958965671"
  },
  {
    title: "Objectives",
    description: "Reduce gap between consultants and contractors; deliver quality services; effective complaint handling; enhance staff qualifications; open new markets locally and abroad; provide advanced, modern, excellent designs for different sectors.",
    icon: <RiShieldStarFill />,
    imageUrl: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-4.jpg?updatedAt=1738958965775"
  }
];

const Values: React.FC = () => {
  return (
    <Section
      id="values"
      title="Our Core Values"
      subtitle="Building Excellence Through Strong Principles"
      className="bg-gradient-to-b from-gray-900 to-gray-800"
      titleClassName="text-white"
      subtitleClassName="text-gray-300"
    >
      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Grid Layout */}
      <div className="relative grid gap-8 md:grid-cols-2">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            {...value}
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
            <div className="text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Values;
