const Bookings = () => (
  <section className="bookings">
    <h2 className="bookings-title">Upcoming Bookings</h2>
    <div className="bookings-list">
      {[1, 2, 3, 4].map((item) => (
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
            <div className="detail-item">
              <span className="detail-label">Group Games</span>
              <span className="detail-price">$365.00</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Council Birth</span>
              <span className="detail-price">$366.40</span>
            </div>
            {item !== 4 && (
              <div className="detail-item highlight">
                <span className="detail-label">New Media (500+100%)</span>
                <span className="detail-price">$730.00</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Bookings;
