import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import FreeEstimateButton from "./Estimation";

const Navbar = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FCC61D",
        light: "white",
      },
      secondary: {
        main: "#000000ff",
      },
      background: {
        default: "#f9f9f9",
        paper: "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      h1: { fontWeight: 700, fontSize: "3.5rem", color: "white" },
      h4: { fontWeight: 600, color: "white" },
      body1: { fontFamily: '"Lato", "Helvetica", "Arial", sans-serif' },
    },
    shape: { borderRadius: 8 },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [value, setValue] = useState(0);

  const menuItems = [
    { label: "HOME", path: "/", icon: <HomeIcon /> },
    { label: "GALLERY", path: "/gallery", icon: <PhotoLibraryIcon /> },
    { label: "ABOUT", path: "/about", icon: <InfoIcon /> },
    { label: "CONTACT", path: "/contact", icon: <ContactMailIcon /> },
  ];

  // keep bottom nav synced with current route
  useEffect(() => {
    const currentIndex = menuItems.findIndex((item) => item.path === location.pathname);
    setValue(currentIndex === -1 ? false : currentIndex);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: "primary.main", bottom: "unset", maxWidth: "100%",  overflowX: "hidden" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" fontWeight={400}>
              Inx 
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    mx: 0.5,
                    color: "black",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* CTA Button */}
          <FreeEstimateButton />
        </Toolbar>

        {/* Sub-bar */}
        <Box
          sx={{
            backgroundColor: "primary.light",
            color: "black",
            py: 0.5,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            BENGALURU - <span style={{ fontWeight: 600 }}>COIMBATORE</span> -
            CHENNAI - KERALA
          </Typography>
        </Box>
      </AppBar>

      {/* Mobile Bottom Nav */}
      {isMobile && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            borderTop: "1px solid #e0e0e0",
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            sx={{
              backgroundColor: "primary.main",
              "& .MuiBottomNavigationAction-root": {
                color: "black",
                minWidth: "auto",
                padding: "6px 0",
              },
              "& .Mui-selected": { color: "black", fontWeight: 600 },
            }}
          >
            {menuItems.map((item, index) => (
              <BottomNavigationAction
                key={item.label}
                label={item.label}
                icon={item.icon}
                component={Link}
                to={item.path}
              />
            ))}
            
          </BottomNavigation>
        </Paper>
      )}
    </ThemeProvider>
  );
};

export default Navbar;
