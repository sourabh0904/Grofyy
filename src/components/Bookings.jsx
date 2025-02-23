const Bookings = () => (
  <div className="bookings-container">
    <h2 className="bookings-title">Upcoming Bookings</h2>
    <div className="bookings-list">
      {[1, 2, 3].map((item) => (
        <div key={item} className="booking-card">
          <div className="booking-header">
            <div className="booking-badge">
              <span className="booking-type">Affordable +</span>
              <span className="booking-date">10/07/2016</span>
            </div>
            <span className="booking-power">0.36 MW</span>
          </div>

          <div className="booking-timeline">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-label">Estimated Time</span>
              <span className="timeline-time">Tomorrow, 05:54 PM</span>
            </div>
          </div>

          <div className="booking-details">
            <div className="detail-line">
              <div className="detail-item">
                <span className="detail-label">Group Games</span>
                <span className="detail-price">$365</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Council Birth</span>
                <span className="detail-price">$366.4</span>
              </div>
            </div>

            <div className="detail-line">
              <div className="detail-item highlight">
                <span className="detail-label">
                  Second Week, New Media (500+100%)
                </span>
                <span className="detail-price">$730</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Bookings;
