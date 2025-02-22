import Header from "./components/Header";
import Bookings from "./components/Bookings";
import "./App.css";
import ServicesCard from "./components/ServicesCard";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="app">
      <Header />

      <div className="top-section">
        {!isMobile && (
          <div className="top-section">
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
        )}
      </div>

      <div className="services-container">
        <ServicesCard />
      </div>
      <div className="bookings-section">
        <Bookings />
      </div>
      <Footer />
    </div>
  );
}

export default App;
