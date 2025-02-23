import React from "react";
import "./BookingCard.css";

let dot = "•";
const BookingCard = () => (
  <div className="booking-card">
    <div className="card-header">
      <div className="reference-id">#RDI23456 </div>
      <div className="datetime">{dot} 12 NOV 2024, 03:36 PM</div>
    </div>

    <div className="time-section">
      <div className="time-image">
        <img
          src="/assets/booking-car.png"
          alt="Time illustration"
          className="time-visual"
        />
      </div>
      <div className="time-content">
        <div className="time-label">Estimated Time</div>
        <div className="time-value">Tomorrow, 05:54 PM</div>
      </div>
    </div>

    <div className="address-section">
      <div className="address-line">
        <span className="address-dot">{dot}</span> 3555 Chaya Greens, Council
        Bluffs 05566
      </div>
      <div className="address-line">
        <span className="address-dot">{dot}</span> 304 Kovacek Well, New Meda
        87991-1798
      </div>
    </div>

    <div className="status-badge upcoming">Upcoming</div>
  </div>
);

export default BookingCard;
