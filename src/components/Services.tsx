import React from 'react';
import { RiBuilding4Line, RiPencilRuler2Line, RiCalculatorLine, RiToolsLine, RiFlowChart, RiShieldCheckLine } from 'react-icons/ri';
import Section from './ui/Section';
import Card from './ui/Card';
import Grid from './ui/Grid';
import Button from './ui/Button';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: 'MEP Design',
    description: 'Comprehensive mechanical, electrical, and plumbing design solutions for modern buildings.',
    icon: <RiPencilRuler2Line className="w-6 h-6" />,
    imageUrl: 'https://ik.imagekit.io/orupgykea/portfolio/portfolio-1.jpg?updatedAt=1738958960932'
  },
  {
    title: 'HVAC Systems',
    description: 'Advanced heating, ventilation, and air conditioning solutions for optimal comfort.',
    icon: <RiBuilding4Line className="w-6 h-6" />,
    imageUrl: 'https://ik.imagekit.io/orupgykea/portfolio/portfolio-2.jpg?updatedAt=1738958964660'
  },
  {
    title: 'Electrical Systems',
    description: 'State-of-the-art electrical design and implementation for all building types.',
    icon: <RiCalculatorLine className="w-6 h-6" />,
    imageUrl: 'https://ik.imagekit.io/orupgykea/portfolio/portfolio-3.jpg?updatedAt=1738958965671'
  },
  {
    title: 'Fire Safety',
    description: 'Comprehensive fire protection systems and safety solutions.',
    icon: <RiShieldCheckLine className="w-6 h-6" />,
    imageUrl: 'https://ik.imagekit.io/orupgykea/portfolio/portfolio-4.jpg?updatedAt=1738958965775'
  },
  {
    title: 'Plumbing Systems',
    description: 'Modern plumbing solutions with focus on efficiency and sustainability.',
    icon: <RiToolsLine className="w-6 h-6" />,
    imageUrl: 'https://ik.imagekit.io/orupgykea/portfolio/portfolio-5.jpg?updatedAt=1738958965936'
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management and coordination services.',
    icon: <RiFlowChart className="w-6 h-6" />,
    imageUrl: 'https://ik.imagekit.io/orupgykea/portfolio/portfolio-6.jpg?updatedAt=1738958965752'
  }
];

const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive MEP solutions tailored to your needs"
      className="bg-gray-50"
    >
      <Grid cols={1} mdCols={2} lgCols={3} gap={6}>
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            imageUrl={service.imageUrl}
            className="group hover:shadow-lg transition-all duration-300"
          >
            <div className="mt-4">
              <Button
                variant="text"
                className="text-primary group-hover:translate-x-2 transition-transform duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More →
              </Button>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
