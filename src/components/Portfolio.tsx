import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiExternalLinkLine, RiBuilding4Line, RiHospitalLine, RiRecycleLine, RiFireLine, RiSunLine, RiFlashlightLine } from 'react-icons/ri';

interface PortfolioItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  technologies: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, icon, image, technologies }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="text-primary text-2xl">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="mt-3 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "Solitaire Apartments Maldives",
      description: "Comprehensive MEP design and implementation for luxury residential apartments.",
      icon: <RiBuilding4Line />,
      image: "https://res.cloudinary.com/dogglueub/image/upload/v1706250894/Construction%20Sites/IMG_1025_mcvae8.jpg",
      technologies: ["HVAC", "Plumbing", "Electrical", "Fire Protection"]
    },
    {
      title: "National School of Maldives",
      description: "Complete educational facility MEP systems design and installation.",
      icon: <RiBuilding4Line />,
      image: "https://res.cloudinary.com/dogglueub/image/upload/v1706250918/Construction%20Sites/IMG_0384_uxofmh.jpg",
      technologies: ["HVAC", "Plumbing", "Low Current Systems"]
    },
    {
      title: "Regional Waste Management System",
      description: "Innovative waste management solutions for regional facilities.",
      icon: <RiRecycleLine />,
      image: "/assets/img/portfolio/waste-management.jpg",
      technologies: ["Mechanical Systems", "Automation", "Environmental Control"]
    },
    {
      title: "IGMH Hospital Fire System",
      description: "State-of-the-art fire protection system for healthcare facility.",
      icon: <RiFireLine />,
      image: "/assets/img/portfolio/hospital.jpg",
      technologies: ["Fire Protection", "Safety Systems", "Building Automation"]
    },
    {
      title: "AZZROVA Solar PV System",
      description: "Renewable energy implementation with solar power systems.",
      icon: <RiSunLine />,
      image: "/assets/img/portfolio/solar.jpg",
      technologies: ["Solar PV", "Electrical", "Energy Management"]
    },
    {
      title: "Ceylon Electricity Board ELV",
      description: "Extra-low voltage systems implementation for power infrastructure.",
      icon: <RiFlashlightLine />,
      image: "/assets/img/portfolio/electricity.jpg",
      technologies: ["ELV Systems", "Power Distribution", "Control Systems"]
    }
  ];

  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across various sectors,
            showcasing our expertise in MEP solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              {...item}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors duration-300"
          >
            <span>View All Projects</span>
            <RiExternalLinkLine className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
