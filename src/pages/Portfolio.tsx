import React, { useState } from 'react';
import { RiBuilding4Line, RiHospitalLine, RiRecycleLine, RiFireLine, RiSunLine, RiFlashlightLine, RiFilter3Line } from 'react-icons/ri';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  technologies: string[];
  category: string;
  location: string;
  year: string;
}

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects: Project[] = [
    {
      title: "Solitaire Apartments Maldives",
      description: "Comprehensive MEP design and implementation for luxury residential apartments, featuring state-of-the-art HVAC systems and smart building automation.",
      icon: <RiBuilding4Line />,
      image: "https://res.cloudinary.com/dogglueub/image/upload/v1706250894/Construction%20Sites/IMG_1025_mcvae8.jpg",
      technologies: ["HVAC", "Plumbing", "Electrical", "Fire Protection", "Building Automation"],
      category: "Residential",
      location: "Male, Maldives",
      year: "2024"
    },
    {
      title: "National School of Maldives",
      description: "Complete educational facility MEP systems design and installation, prioritizing energy efficiency and student comfort.",
      icon: <RiBuilding4Line />,
      image: "https://res.cloudinary.com/dogglueub/image/upload/v1706250918/Construction%20Sites/IMG_0384_uxofmh.jpg",
      technologies: ["HVAC", "Plumbing", "Low Current Systems", "Energy Management"],
      category: "Educational",
      location: "Male, Maldives",
      year: "2023"
    },
    {
      title: "Regional Waste Management System",
      description: "Innovative waste management solutions for regional facilities, incorporating environmental control systems.",
      icon: <RiRecycleLine />,
      image: "/assets/img/portfolio/waste-management.jpg",
      technologies: ["Mechanical Systems", "Automation", "Environmental Control"],
      category: "Infrastructure",
      location: "Maldives",
      year: "2023"
    },
    {
      title: "IGMH Hospital Fire System",
      description: "State-of-the-art fire protection system for healthcare facility, ensuring patient and staff safety.",
      icon: <RiFireLine />,
      image: "/assets/img/portfolio/hospital.jpg",
      technologies: ["Fire Protection", "Safety Systems", "Building Automation"],
      category: "Healthcare",
      location: "Male, Maldives",
      year: "2023"
    },
    {
      title: "AZZROVA Solar PV System",
      description: "Renewable energy implementation with solar power systems, reducing carbon footprint.",
      icon: <RiSunLine />,
      image: "/assets/img/portfolio/solar.jpg",
      technologies: ["Solar PV", "Electrical", "Energy Management"],
      category: "Energy",
      location: "Maldives",
      year: "2022"
    },
    {
      title: "Ceylon Electricity Board ELV",
      description: "Extra-low voltage systems implementation for power infrastructure, enhancing grid reliability.",
      icon: <RiFlashlightLine />,
      image: "/assets/img/portfolio/electricity.jpg",
      technologies: ["ELV Systems", "Power Distribution", "Control Systems"],
      category: "Infrastructure",
      location: "Sri Lanka",
      year: "2022"
    }
  ];

  const categories = ['all', ...new Set(projects.map(project => project.category.toLowerCase()))];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category.toLowerCase() === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of successful projects across various sectors,
            showcasing our expertise in MEP engineering and sustainable solutions.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <RiFilter3Line className="text-2xl text-gray-600" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeFilter === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-primary text-2xl">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
