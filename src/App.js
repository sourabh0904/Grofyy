import Header from "./components/Header";
import Services from "./components/Services";
import Bookings from "./components/Bookings";
import Comments from "./components/Comments";
import "./App.css";
import ServicesCard from "./components/ServicesCard";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="app">
      <Header />

      {/* Tagline + Bookings Row */}
      <div className="top-section">
        {/* <div className="tagline-container">
          <img
            src="/assets/image.png"
            alt="Affordable Stays, Tailored for You!"
            className="main-tagline"
          />
        </div> */}
        <Button
          variant="contained"
          className="top-btn"
          sx={{
            backgroundColor: "#0A0A0A",
            "&:hover": {
              backgroundColor: "#2D2D2D",
            },
          }}
        >
          My Bookings &rarr;
        </Button>
      </div>

      {/* Services Card Below Tagline */}
      <div className="services-container">
        <ServicesCard />
      </div>
      <div className="bookings-section">
        <Bookings />
      </div>

      {/* <Comments /> */}
    </div>
  );
}

export default App;
