import React from "react";
import { Button } from "@mui/material";

const Header = () => (
  <header className="header">
    <div className="brand">
      <img src="/assets/Grofyy.png" alt="Grefy Logo" className="logo-image" />
    </div>
    <nav>
      <Button className="nav-link">My Bookings</Button>
      <Button className="nav-link">Blog</Button>
      <Button className="nav-link">About Us</Button>
      <Button className="nav-link">Support</Button>
      <Button
        variant="contained"
        className="register-btn"
        sx={{
          backgroundColor: "#0A0A0A",
          "&:hover": {
            backgroundColor: "#2D2D2D",
          },
        }}
      >
        Register Now
      </Button>
    </nav>
  </header>
);

export default Header;
