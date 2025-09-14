import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Navbar from "./Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <Box sx={{ background: "#fff", minHeight: "100vh", py: { xs: 8, md: 16 } }}>
        <Container maxWidth="lg">
          {/* Intro */}
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: "#222", mb: 2 }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              We believe great design starts with a conversation. Whether you
              have a project in mind or just want to explore possibilities, our
              team is here to guide you. Reach out today — we’d love to hear
              from you!
            </Typography>
          </Box>

          {/* Contact Info */}
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
            {[
              {
                icon: <PhoneIcon fontSize="large" />,
                title: "Call Us Directly",
                detail: "+91 99430 99996",
                link: "tel:+9199430 99996",
              },
              {
                icon: <EmailIcon fontSize="large" />,
                title: "Email Us",
                detail: "inxglazeinteriors@gmail.com",
                link: "mailto: inxglazeinteriors@gmail.com",
              },
              {
                icon: <LocationOnIcon fontSize="large" />,
                title: "Gopalapuram Bus Stop",
                detail: "No: 9 Vadavali Road, Coimbatore, India",
                link: "https://goo.gl/maps",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    borderRadius: 3,
                    p: 4,
                    height: "100%",
                    border: "1px solid #eee",
                    transition: "0.3s",
                    "&:hover": {
                      borderColor: "#FCC61D",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <IconButton
                    href={item.link}
                    sx={{
                      mb: 2,
                      color: "#FCC61D",
                      backgroundColor: "rgba(252,198,29,0.1)",
                      "&:hover": { backgroundColor: "rgba(252,198,29,0.2)" },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.detail}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
           

          {/* Divider */}
          <Divider sx={{ my: 2 }} />

          {/* Map Section */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
              Find Us Here
            </Typography>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15664.37675505669!2d76.9101697!3d11.0315598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f49890efcf9%3A0xcb399733822241d0!2sINX%20GLAZE%20Solutions%20Interior%20%26%20Exterior!5e0!3m2!1sen!2sin!4v1757847807828!5m2!1sen!2sin"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                width: "100%",
                height: { xs: 250, sm: 350, md: 450 },
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;


// https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15664.37675505669!2d76.9101697!3d11.0315598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f49890efcf9%3A0xcb399733822241d0!2sINX%20GLAZE%20Solutions%20Interior%20%26%20Exterior!5e0!3m2!1sen!2sin!4v1757847807828!5m2!1sen!2sin