import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Avatar,
} from "@mui/material";
import Navbar from "../Interiors/Navbar.jsx";
import aboutImg from "../Interior_Images/House.jpg"; // replace with your hero image
import team1 from "../Interior_Images/Bed.jpg"; // replace with team images
import team2 from "../Interior_Images/Living.jpg";
import team3 from "../Interior_Images/Kavundampalayam.jpg";
import Saloon from '../Interior_Images/Saloon.jpg'
import PoojaDoor from '../Interior_Images/PoojaDoor.jpg'
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: `url(${aboutImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: { xs: "50vh", md: "70vh" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                    px: 2,
                }}
            >
                <Box sx={{ bgcolor: "rgba(0,0,0,0.5)", p: 4, borderRadius: 3 }}>
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                        About Us
                    </Typography>
                    <Typography variant="h6" sx={{ maxWidth: 600, mx: "auto" }}>
                        Crafting timeless interiors that blend elegance, comfort, and
                        functionality — designed exclusively for you.
                    </Typography>
                </Box>
            </Box>

            {/* Our Story */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img
                            src={aboutImg}
                            alt="Our Story"
                            style={{
                                width: "100%",
                                borderRadius: "16px",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                            Our Story
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                            At <b>Inx Interiors</b>, we believe every space has a story to
                            tell. Founded with a passion for creativity and precision, our
                            mission is to transform homes into living masterpieces. From
                            modern minimalism to classic luxury, our designs are curated to
                            reflect your personality and lifestyle.
                        </Typography>
                        <Button
                            variant="contained"
                            href="tel:+9199430 99996" // replace with your phone number
                            sx={{
                                background: "linear-gradient(90deg, #FCC61D, #e8b10c)",
                                color: "black",
                                fontWeight: 600,
                                borderRadius: "30px",
                                px: 4,
                                py: 1.2,
                                textTransform: "none",
                                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                                "&:hover": { background: "#e0a800" },
                            }}
                        >
                            📞 Call for Free Consultation
                        </Button>

                    </Grid>
                </Grid>
            </Container>

            {/* Mission & Vision */}
            <Box
                sx={{
                    background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",
                    py: 0,
                }}
            >
                <Container>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    p: 5,
                                    borderRadius: "24px",
                                    backdropFilter: "blur(10px)",
                                    background: "rgba(255,255,255,0.8)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                    border: "1px solid rgba(252,198,29,0.4)",
                                    textAlign: "left",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: 700, mb: 3, color: "#FCC61D" }}
                                >
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" sx={{color: "black", lineHeight: 1.9, fontSize: "1.1rem" }}>
                                    To bring our clients’ vision to life by delivering innovative,
                                    functional, and aesthetically pleasing interior designs that enhance
                                    everyday living. Every design we create is rooted in creativity,
                                    quality, and personalization.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    p: 5,
                                    borderRadius: "24px",
                                    backdropFilter: "blur(10px)",
                                    background: "rgba(255,255,255,0.8)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                    border: "1px solid rgba(252,198,29,0.4)",
                                    textAlign: "left",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: 700, mb: 3, color: "#FCC61D" }}
                                >
                                    Our Vision
                                </Typography>
                                <Typography variant="body1" sx={{ color: "black", lineHeight: 1.9, fontSize: "1.1rem" }}>
                                    To become the most trusted name in interior design across India,
                                    known for timeless quality, luxury finis    hes, and a customer-first
                                    approach. We envision transforming homes into experiences that
                                    inspire.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Meet Our Team */}
            <Container sx={{ py: 12, textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 8 }}>
                    Latest Designs!
                </Typography>

                <Grid container spacing={6} justifyContent="center">
                    {[{ img: Saloon, name: "Saloon", role: "Premium look" },
                    { img: PoojaDoor, name: "Rooja Room", role: "Creative Director" },
                    { img: team3, name: "Villa Interior" }]
                        .map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box
                                    sx={{
                                        position: "relative",
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        height: 360,
                                        cursor: "pointer",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                        transition: "transform 0.3s ease",
                                        "&:hover": { transform: "translateY(-8px)" },
                                    }}
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            filter: "brightness(70%)",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            p: 3,
                                            color: "white",
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.7) 30%, transparent 100%)",
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                            {member.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                            {member.role}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                </Grid>
            </Container>


            {/* Call to Action */}
            <Box
                sx={{
                    py: 8,
                    background: "linear-gradient(90deg, #FCC61D, #f0b90c)",
                    textAlign: "center",
                    color: "black",
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Ready to Transform Your Home?
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Let’s design a space that reflects your personality and lifestyle.
                </Typography>   

            </Box>
        </>
    );
};

export default AboutPage;
