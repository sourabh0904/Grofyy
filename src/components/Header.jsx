import React, { useState } from "react";
import { Button, IconButton, Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const navItems = [
    "My Bookings",
    "Blog",
    "About Us",
    "Support",
    "Register Now",
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="header">
      <div className="brand-container">
        <img src="/assets/Grofyy.png" alt="Grefy Logo" className="logo-image" />

        {isMobile && (
          <div className="mobile-icons">
            <IconButton color="inherit" aria-label="notifications">
              <NotificationsIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </div>
        )}
      </div>

      <nav className="desktop-nav">
        {navItems.slice(0, 4).map((item) => (
          <Button key={item} className="nav-link">
            {" "}
            {item}
          </Button>
        ))}
        <Button
          variant="contained"
          className="register-btn"
          sx={{
            backgroundColor: "#0A0A0A",
            "&:hover": { backgroundColor: "#2D2D2D" },
          }}
        >
          Register Now
        </Button>
      </nav>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            padding: "1rem",
          },
        }}
      >
        <div className="drawer-header">
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </div>
        {navItems.map((item) => (
          <Button
            key={item}
            fullWidth
            sx={{ justifyContent: "flex-start", py: 1.5 }}
          >
            {item}
          </Button>
        ))}
      </Drawer>
    </header>
  );
};

export default Header;
