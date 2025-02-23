import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import BookingCard from "./BookingCard";
import "./BookingCard.css";

const BookingsList = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const bookings = [1, 2, 3];

  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <h2 className="bookings-title">Upcoming Bookings</h2>
        {isMobile && (
          <button
            className="view-all-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            View {isExpanded ? "Less" : "All"} ▼
          </button>
        )}
      </div>

      <div className="bookings-content">
        {bookings
          .slice(0, isMobile && !isExpanded ? 1 : bookings.length)
          .map((item) => (
            <BookingCard key={item} />
          ))}
      </div>
    </div>
  );
};

export default BookingsList;
