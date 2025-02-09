import React from 'react';
import Section from './ui/Section';

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  detailImages?: string[];
  category: string;
  client: string;
  location: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, image, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
          {category}
        </span>
        <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const portfolioItems: PortfolioItemProps[] = [
  {
    title: "Solitaire Apartments Maldives",
    description: "Comprehensive MEP design and implementation for luxury residential apartments",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-1.jpg?updatedAt=1738958960932",
    detailImages: [
      "https://ik.imagekit.io/orupgykea/portfolio/portfolio-details-1.jpg?updatedAt=1738958966074",
      "https://ik.imagekit.io/orupgykea/portfolio/portfolio-details-2.jpg?updatedAt=1738958965845",
      "https://ik.imagekit.io/orupgykea/portfolio/portfolio-details-3.jpg?updatedAt=1738958968895"
    ],
    category: "Residential",
    client: "Solitaire Development",
    location: "Male, Maldives"
  },
  {
    title: "Azure Beach Resort",
    description: "State-of-the-art MEP systems for a luxury beachfront resort",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-2.jpg?updatedAt=1738958964660",
    category: "Hospitality",
    client: "Azure Group",
    location: "Baa Atoll, Maldives"
  },
  {
    title: "Marina Bay Complex",
    description: "Advanced MEP infrastructure for mixed-use development",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-3.jpg?updatedAt=1738958965671",
    category: "Commercial",
    client: "Marina Development Ltd",
    location: "Male, Maldives"
  },
  {
    title: "Coral Gardens Residences",
    description: "Sustainable MEP solutions for eco-friendly residential complex",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-4.jpg?updatedAt=1738958965775",
    category: "Residential",
    client: "Coral Developers",
    location: "Hulhumale, Maldives"
  },
  {
    title: "Ocean View Hospital",
    description: "Specialized MEP systems for modern healthcare facility",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-5.jpg?updatedAt=1738958965936",
    category: "Healthcare",
    client: "Health Services Ltd",
    location: "Male, Maldives"
  },
  {
    title: "Palm Plaza Mall",
    description: "Complex MEP infrastructure for retail and entertainment center",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-6.jpg?updatedAt=1738958965752",
    category: "Commercial",
    client: "Palm Retail Group",
    location: "Hulhumale, Maldives"
  },
  {
    title: "Sunset Beach Hotel",
    description: "Innovative MEP solutions for boutique beachfront hotel",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-7.jpg?updatedAt=1738958965981",
    category: "Hospitality",
    client: "Sunset Hospitality",
    location: "Addu City, Maldives"
  },
  {
    title: "Green Office Tower",
    description: "Energy-efficient MEP systems for modern office building",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-8.jpg?updatedAt=1738958966026",
    category: "Commercial",
    client: "Green Development Corp",
    location: "Male, Maldives"
  },
  {
    title: "Island Medical Center",
    description: "Critical MEP infrastructure for medical facility",
    image: "https://ik.imagekit.io/orupgykea/portfolio/portfolio-9.jpg?updatedAt=1738958966055",
    category: "Healthcare",
    client: "Island Healthcare",
    location: "Kulhudhuffushi, Maldives"
  }
];

const Portfolio: React.FC = () => {
  return (
    <Section
      id="portfolio"
      title="Our Portfolio"
      subtitle="Showcasing Our Excellence in MEP Solutions"
      className="bg-gray-50"
    >
      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
