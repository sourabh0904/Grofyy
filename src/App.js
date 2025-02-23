import Header from "./components/Header";
import "./App.css";
import { useMediaQuery } from "@mui/material";
import Footer from "./components/Footer";
import BookingsList from "./components/BookingList";
import Card from "./components/Card";

function App() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="content-section">
          <div className="poster-container">
            <img
              src="/assets/image.png"
              alt="Affordable stays poster"
              className="poster-image"
            />
          </div>
          <Card />
        </div>
        <div className="content-section">
          <BookingsList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
