import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ModelViewer from '../components/ModelViewer';
import TrueFocus from '../components/TrueFocus';
import DiaphragmModel from '../components/DiaphragmModel';
import '../styles/Services.css';
import Services from './Services';




const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          
          <h1 className="hero-title">The Future of Maritime Operations All in<TrueFocus
            sentence="One ERP Platform"
            manualMode={false}
            blurAmount={2}
            speed={1}
            ></TrueFocus></h1>
          <p className="hero-subtitle">
            From sourcing to delivery, manage your industrial operations with precision, speed, and global reach.
          </p>
          
        
  <Link to="/contact"className="cta-button">
    Request a Demo ⚓
  </Link>
        </div>

      
        <ModelViewer />

        
        
        <div>
         <h1>Marines Ventilation System</h1>
            <DiaphragmModel />
        
        </div>
      </section>

       <section>
<Services />

</section>



      
      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">⚓ About Euroasiann Group</h2>
        <p className="about-text">
          Founded in 1989, Euroasiann Group has grown into a global sourcing powerhouse. With deep roots in China and a vast supplier network, we deliver industrial solutions across sectors including marine, manufacturing, and technology.
        </p>
        <p className="about-text">
          Our journey began with a simple mission: to bridge the gap between global suppliers and industrial buyers. Today, we stand as a trusted partner for companies worldwide, offering comprehensive solutions that drive efficiency and growth.
        </p>
        
            </section>
    </div>
  );
};

export default Home;

