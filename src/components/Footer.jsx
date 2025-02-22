import React from "react";
import {
  useMediaQuery,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import InfoIcon from "@mui/icons-material/Info";
import SupportIcon from "@mui/icons-material/Support";
import PersonIcon from "@mui/icons-material/Person";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [value, setValue] = React.useState(0);

  if (!isMobile) return null;

  return (
    <footer className="mobile-footer">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          style={{ color: "#FF5B23" }}
        />
        <BottomNavigationAction
          label="Bookings"
          icon={<BookIcon />}
          style={{ color: "#FF5B23" }}
        />
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          style={{ color: "#FF5B23" }}
        />
        <BottomNavigationAction
          label="Support"
          icon={<SupportIcon />}
          style={{ color: "#FF5B23" }}
        />
        <BottomNavigationAction
          label="Account"
          icon={<PersonIcon />}
          style={{ color: "#FF5B23" }}
        />
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
