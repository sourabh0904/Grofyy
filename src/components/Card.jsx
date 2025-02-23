import React from "react";
import "./Card.css";
import { useMediaQuery } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

const cardData = [
  {
    title: "Rides",
    description: "Find or offer rides easily.",
    buttonText: "Ride Now",
    image: "/assets/ride-icon.png",
  },
  {
    title: "Accommodations",
    description: "Discover cozy trip.",
    buttonText: "Book Now",
    image: "/assets/recommendation-icon.png",
  },
  {
    title: "Scholarships",
    description: "Explore scholarships.",
    buttonText: "Apply Now",
    image: "/assets/scheduling-icon.png",
  },
];

const Card = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className="container">
      <h2>Discover Our Services</h2>
      <div className="services-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              {/* {!isMobile && (
                <button className="card-button">{card.buttonText}</button>
              )} */}
              {!isMobile && (
                <button className="ride-now-button">
                  <span className="text">{card.title}</span>
                  <div className="icon-container">
                    <ArrowUpRight size={20} color="white" />
                  </div>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
