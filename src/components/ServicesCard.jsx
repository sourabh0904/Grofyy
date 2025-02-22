import React from "react";

const ServicesCard = () => {
  const services = [
    {
      title: "Ride",
      icon: "/assets/ride-icon.png",
      description: "of offer offers to retain your decision honestly",
      buttonText: "Ride Now",
      buttonIcon: "/assets/arrow-icon.png",
    },
    {
      title: "Recommendation",
      icon: "/assets/recommendation-icon.png",
      description: "on every offer to keep it clearly clear for every trip",
      buttonText: "Book Now",
      buttonIcon: "/assets/arrow-icon.png",
    },
    {
      title: "Scholarship",
      icon: "/assets/scheduling-icon.png",
      description: "on a regular meal to support our learning journey",
      buttonText: "Apply Now",
      buttonIcon: "/assets/arrow-icon.png",
    },
    {
      title: "Recommendation",
      icon: "/assets/car-icon.png",
      description: "on every offer to keep it clearly clear for every trip",
      buttonText: "Book Now",
      buttonIcon: "/assets/arrow-icon.png",
    },
    {
      title: "Recommendation",
      icon: "/assets/house-icon.png",
      description: "on every offer to keep it clearly clear for every trip",
      buttonText: "Book Now",
      buttonIcon: "/assets/arrow-icon.png",
    },
    {
      title: "Recommendation",
      icon: "/assets/cap-icon.png",
      description: "on every offer to keep it clearly clear for every trip",
      buttonText: "Book Now",
      buttonIcon: "/assets/arrow-icon.png",
    },
  ];

  return (
    <section className="services-section">
      <div className="tagline-container">
        <img
          src="/assets/image.png"
          alt="Affordable Stays, Tailored for You!"
          className="main-tagline"
        />
      </div>
      <h2 className="section-title">Discover Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-icon">
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
                loading="lazy"
              />
            </div>
            <div className="card-header">
              <h3 className="service-title">{service.title}</h3>
              <span className="ratio">{service.ratio}</span>
            </div>
            <p className="service-description">{service.description}</p>
            <button className="service-button">
              {service.buttonText}
              <img
                src={service.buttonIcon}
                alt="action"
                className="button-icon"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
