import React from 'react';
import { RiLinkedinBoxFill, RiTwitterFill, RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
import Section from './ui/Section';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, socialLinks }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-14 transition-transform duration-300 group-hover:translate-y-0">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-gray-300 mb-4">{role}</p>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="text-white hover:text-primary transition-colors">
              <RiLinkedinBoxFill className="text-xl" />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} className="text-white hover:text-primary transition-colors">
              <RiTwitterFill className="text-xl" />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} className="text-white hover:text-primary transition-colors">
              <RiFacebookBoxFill className="text-xl" />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} className="text-white hover:text-primary transition-colors">
              <RiInstagramLine className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const teamMembers: TeamMemberProps[] = [
  {
    name: "Ahmed Rasheed",
    role: "Chief Executive Officer",
    image: "https://ik.imagekit.io/orupgykea/team/team-1.jpg?updatedAt=1738958960941",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Mohamed Saeed",
    role: "Technical Director",
    image: "https://ik.imagekit.io/orupgykea/team/team-2.jpg?updatedAt=1738958960734",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    }
  },
  {
    name: "Ibrahim Ali",
    role: "Operations Manager",
    image: "https://ik.imagekit.io/orupgykea/team/team-3.jpg?updatedAt=1738958960805",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Hassan Ahmed",
    role: "Project Manager",
    image: "https://ik.imagekit.io/orupgykea/team/team-4.jpg?updatedAt=1738958960945",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  }
];

const Team: React.FC = () => {
  return (
    <Section
      id="team"
      title="Our Team"
      subtitle="Meet the Experts Behind Our Success"
      className="bg-gray-50"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </Section>
  );
};

export default Team;
