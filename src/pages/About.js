import React from 'react';
import '../styles/About.css';

const About = () => {
  const milestones = [
    {
      year: '1989',
      title: 'Company Founded',
      description: 'Euroasiann Group established with a vision to connect global markets.'
    },
    {
      year: '1995',
      title: 'Marine Division Launch',
      description: 'Expanded into marine spare manufacturing and supply chain solutions.'
    },
    {
      year: '2005',
      title: 'Global Expansion',
      description: 'Established operations across multiple continents with local partnerships.'
    },
    {
      year: '2015',
      title: 'Technology Integration',
      description: 'Integrated advanced engineering and technology services into our portfolio.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Enhanced digital capabilities for better supply chain visibility and efficiency.'
    },
    {
      year: '2025',
      title: 'Future Ready',
      description: 'Continuing to innovate and adapt to the evolving global industrial landscape.'
    }
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Euroasiann Group</h1>
          <p className="page-subtitle">
            Three decades of excellence in global industrial solutions
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          {/* Company Overview */}
          <section className="company-overview">
            <div className="overview-content">
              <h2 className="section-title">Our Story</h2>
              <div className="overview-text">
                <p>
                  Founded in 1989, Euroasiann Group has grown into a global sourcing powerhouse. 
                  With deep roots in China and a vast supplier network, we deliver industrial 
                  solutions across sectors including marine, manufacturing, and technology.
                </p>
                <p>
                  Our journey began with a simple mission: to bridge the gap between global 
                  suppliers and industrial buyers. Today, we stand as a trusted partner for 
                  companies worldwide, offering comprehensive solutions that drive efficiency 
                  and growth.
                </p>
                <p>
                  With over three decades of experience, we understand the complexities of 
                  international trade and the importance of reliable partnerships. Our 
                  commitment to quality, innovation, and customer satisfaction has made us 
                  a leader in the global industrial sourcing landscape.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="mission-section">
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <div className="mission-statement">
                <p className="mission-text">
                  "To be the world's most trusted partner in global industrial sourcing, 
                  delivering innovative solutions that connect businesses, drive efficiency, 
                  and create sustainable value across all industries."
                </p>
              </div>
              
              <div className="values-grid">
                <div className="value-item">
                  <h3 className="value-title">Excellence</h3>
                  <p className="value-description">
                    We strive for the highest standards in everything we do, from product 
                    quality to customer service.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3 className="value-title">Innovation</h3>
                  <p className="value-description">
                    We embrace new technologies and methodologies to stay ahead of 
                    industry trends and customer needs.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3 className="value-title">Integrity</h3>
                  <p className="value-description">
                    We conduct business with transparency, honesty, and respect for 
                    all our partners and stakeholders.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3 className="value-title">Global Reach</h3>
                  <p className="value-description">
                    We leverage our worldwide network to provide comprehensive 
                    solutions that transcend geographical boundaries.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="timeline-section">
            <h2 className="section-title">Our Journey</h2>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-year">{milestone.year}</span>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
