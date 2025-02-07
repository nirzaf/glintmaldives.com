import React from 'react';

interface PortfolioItemProps {
  imageUrl: string;
  title: string;
  category: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imageUrl, title, category }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img src={imageUrl} className="img-fluid" alt={title} />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{category}</p>
          <div className="portfolio-links">
            <a href={imageUrl} data-gallery="portfolioGallery" className="portfolio-lightbox" title={title}>
              <i className="bx bx-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      imageUrl: "https://res.cloudinary.com/dogglueub/image/upload/v1706250894/Construction%20Sites/IMG_1025_mcvae8.jpg",
      title: "Construction Site 1",
      category: "Construction"
    },
    {
      imageUrl: "https://res.cloudinary.com/dogglueub/image/upload/v1706250918/Construction%20Sites/IMG_0384_uxofmh.jpg",
      title: "Construction Site 2",
      category: "Construction"
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
