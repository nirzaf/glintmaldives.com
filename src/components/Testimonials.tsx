import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import Section from './ui/Section';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, name, position, company, image }) => {
  return (
    <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2">
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 text-4xl text-primary opacity-20">
        <RiDoubleQuotesL />
      </div>

      {/* Content */}
      <div className="mb-6 text-gray-600 leading-relaxed">
        {content}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{position} at {company}</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 h-24 w-24 rounded-tr-2xl bg-primary/5 -z-10 transition-colors duration-300 group-hover:bg-primary/10" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-bl-2xl bg-secondary/5 -z-10 transition-colors duration-300 group-hover:bg-secondary/10" />
    </div>
  );
};

const testimonials: TestimonialProps[] = [
  {
    content: "Working with Glint Maldives has been an exceptional experience. Their MEP solutions are innovative and their team's expertise is evident in every project they handle.",
    name: "Sarah Johnson",
    position: "Project Director",
    company: "Oceanfront Resorts",
    image: "https://ik.imagekit.io/orupgykea/testimonials/testimonials-1.jpg?updatedAt=1738958960950"
  },
  {
    content: "The attention to detail and technical excellence provided by Glint Maldives is outstanding. They've consistently delivered beyond our expectations.",
    name: "Michael Chen",
    position: "Operations Manager",
    company: "Island Developments",
    image: "https://ik.imagekit.io/orupgykea/testimonials/testimonials-2.jpg?updatedAt=1738958960813"
  },
  {
    content: "Their commitment to quality and sustainable solutions sets them apart. Glint Maldives has been instrumental in the success of our luxury resort projects.",
    name: "Emma Thompson",
    position: "Chief Architect",
    company: "Paradise Builders",
    image: "https://ik.imagekit.io/orupgykea/testimonials/testimonials-3.jpg?updatedAt=1738958960817"
  },
  {
    content: "The team at Glint Maldives brings both expertise and innovation to every project. Their MEP solutions are both efficient and environmentally conscious.",
    name: "David Wilson",
    position: "Development Director",
    company: "Coral Constructions",
    image: "https://ik.imagekit.io/orupgykea/testimonials/testimonials-4.jpg?updatedAt=1738958960756"
  },
  {
    content: "We've worked with many MEP contractors, but Glint Maldives stands out for their professionalism and technical excellence. Highly recommended!",
    name: "Lisa Anderson",
    position: "Facility Manager",
    company: "Azure Hotels",
    image: "https://ik.imagekit.io/orupgykea/testimonials/testimonials-5.jpg?updatedAt=1738958960683"
  },
  {
    content: "Their innovative approach to sustainable MEP solutions has transformed our resort's efficiency. The energy savings and performance improvements have exceeded our expectations.",
    name: "James Rahman",
    position: "Sustainability Director",
    company: "Emerald Island Resort",
    image: "https://ik.imagekit.io/orupgykea/testimonials/testimonials-1.jpg?updatedAt=1738958960950"
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="Client Testimonials"
      subtitle="What Our Clients Say About Us"
      className="bg-gradient-to-b from-white to-gray-50"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      {/* Grid Layout */}
      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
