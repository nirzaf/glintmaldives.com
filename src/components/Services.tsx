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
  features: string[];
}

const services: Service[] = [
  {
    title: 'MEP Studies',
    description: 'Comprehensive mechanical, electrical, and plumbing analysis for optimal system design.',
    icon: <RiCalculatorLine />,
    features: [
      'Load calculations',
      'Energy analysis',
      'System optimization',
      'Cost estimation'
    ]
  },
  {
    title: 'System Design',
    description: 'Expert design services for all MEP systems with focus on efficiency and sustainability.',
    icon: <RiPencilRuler2Line />,
    features: [
      'HVAC systems',
      'Electrical systems',
      'Plumbing systems',
      'Fire protection'
    ]
  },
  {
    title: 'Engineering Calculations',
    description: 'Precise calculations and analysis to ensure system performance and compliance.',
    icon: <RiCalculatorLine />,
    features: [
      'Thermal calculations',
      'Pressure calculations',
      'Power calculations',
      'Flow analysis'
    ]
  },
  {
    title: 'Construction Supervision',
    description: 'Professional oversight of MEP installation and construction processes.',
    icon: <RiToolsLine />,
    features: [
      'Quality control',
      'Timeline management',
      'Safety compliance',
      'Technical guidance'
    ]
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management services for MEP installations.',
    icon: <RiFlowChart />,
    features: [
      'Resource planning',
      'Schedule management',
      'Risk assessment',
      'Progress tracking'
    ]
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive quality control and assurance for all MEP works.',
    icon: <RiShieldCheckLine />,
    features: [
      'Standards compliance',
      'Testing protocols',
      'Documentation',
      'Performance verification'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive MEP solutions tailored to your needs"
      bgColor="gray"
    >
      <Grid cols={1} mdCols={2} lgCols={3} gap={8}>
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            className="h-full"
          >
            <ul className="mt-4 space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                variant="ghost"
                className="text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
