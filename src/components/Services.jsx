const Services = () => (
  <section className="services">
    <h2>Discover Our Services</h2>
    <div className="service-grid">
      {["Ride", "Recommendation", "Scheduling", "Applying"].map((service) => (
        <div key={service} className="service-card">
          <h3>{service}</h3>
          <p>
            {
              {
                Ride: "(1:2) of offer offers to retain your decision honestly",
                Recommendation:
                  "(1:3) on every offer to keep it clear for every trip",
                Scheduling:
                  "(2:5) on regular meal to support our learning journey",
                Applying: "(1:4) booking",
              }[service]
            }
          </p>
        </div>
      ))}
    </div>
  </section>
);
export default Services;
