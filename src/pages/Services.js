import React from 'react';
import '../styles/Services.css';
import { Link } from 'react-router-dom';


const Services = () => {
  const services = [
    {
      icon: '🌍',
      title: 'Vendor & Agent Communication',
      description: 'We connect you to verified suppliers across continents.',
      details: [
        'Supplier verification and quality assurance',
        'Global supply chain optimization',
        'Cost-effective procurement solutions',
        'Multi-continent sourcing network'
      ]
    },
    {
      icon: '🚢',
      title: 'Ship & Crew Management',
      description: 'Efficiently manage vessel operations and crew scheduling in one place.',
      details: [
        'Custom marine component manufacturing',
        'Industrial spare parts production',
        'Quality control and testing',
        'Crew certification tracking'
      ]
    },
    {
      icon: '⚙️',
      title: 'Engineering & Tech Support',
      description: 'From design to deployment — we support your systems.',
      details: [
        'Technical consulting and design',
        'System integration and deployment',
        'Maintenance and support services',
        'Innovation and R&D solutions'
      ]
    },
    {
      icon: '📦',
      title: 'International Logistics',
      description: 'Efficient, reliable, and scalable trade solutions.',
      details: [
        'End-to-end logistics management',
        'Customs clearance and documentation',
        'Warehousing and distribution',
        'Supply chain visibility and tracking'
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Comprehensive Maritime modules ⚓</h1>
        <p className="page-subtitle">
          Our platform offers seamlessly integrated modules to optimize every aspect of your maritime operations.
        </p>
      </div>
    </div><div className="services-content">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <div className="service-info">
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>

                <div className="service-details">
                  <h3 className="details-title">What We Offer:</h3>
                  <ul className="details-list">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="detail-item">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
           <h2 className="cta-title">Let's Work Together</h2>

            <p className="cta-description">
              Contact us today to discuss your specific requirements and how we can help.
            </p>
            
  <Link to="/contact" className="cta-button">
    Contact Us Now ⚓
  </Link>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
