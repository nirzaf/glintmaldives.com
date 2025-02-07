import React from 'react';

interface FeatureBoxProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description }) => {
  return (
    <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
      <i className={icon}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div 
            className="image col-lg-6" 
            style={{backgroundImage: 'url("/assets/img/features.jpg")'}} 
            data-aos="fade-right">
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <FeatureBox
              icon="bx bx-receipt"
              title="Vision"
              description="To provide quality solutions that add value to our environment and society, ensuring reliability and customer confidence. Our vision is to supply services that meet customer requirements at all times."
            />
            <FeatureBox
              icon="bx bx-cube-alt"
              title="Mission"
              description="To provide comprehensive mechanical, electrical & plumbing services for the Sri Lanka market and regionally/internationally. We offer innovative solutions that are technically sound and environmentally correct."
            />
            <FeatureBox
              icon="bx bx-images"
              title="Services"
              description="We perform MEP studies, design, drawings, modeling, review, engineering calculations, equipment selection, method statements, submittals, planning/coordination, supervision for projects ranging from houses to infrastructure."
            />
            <FeatureBox
              icon="bx bx-shield"
              title="Objectives"
              description="Reduce gap between consultants and contractors; deliver quality services; effective complaint handling; enhance staff qualifications; open new markets locally and abroad; provide advanced, modern, excellent designs for different sectors; improve customer service."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
