import React, { useState } from "react";
import {
    Box,
    Grid,
    Card,
    CardMedia,
    Typography,
    Chip,
    Dialog,
    DialogContent,
    IconButton,
    AppBar,
    Toolbar,
    Slide,
    Container,
} from "@mui/material";
import {
    Close as CloseIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";
import interior from "../Interior_Images/Bed.jpg";
import Navbar from "../Interiors/Navbar.jsx";
import interiors_Img1 from '../Interior_Images/Living.jpg';
import interiors_Img2 from '../Interior_Images/House.jpg'
import interiors_Img3 from '../Interior_Images/Bed.jpg'
import interiors_Img4 from '../Interior_Images/Kavundampalayam.jpg'
import Pooja from '../Interior_Images/Pooja.jpg'
import Saloon from '../Interior_Images/Saloon.jpg'
import Blue from '../Interior_Images/Blue.jpg'
import PoojaDoor from '../Interior_Images/PoojaDoor.jpg'
import stairs from '../Interior_Images/Stairs.jpg'

// Transition for modal
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Sample interior designs
const interiorDesigns = [
    {
        id: 6,
        src: Pooja,
        title: "Pooja Room",
        category: "Pooja Room",
        description: "Sleek dining area with statement lighting and custom table",
    },
    {
        id: 1,
        src: interior,
        title: "Modern Bedroom",
        category: "Bedroom",
        description: "Contemporary design with minimalist furniture and natural lighting",
    },
    {
        id: 2,
        src: interiors_Img1,
        title: "Luxury living Room",    
        category: "Living Room",
        description: "High-end kitchen with premium appliances and marble countertops",
    },
    {
        id: 3,
        src: interiors_Img2,
        title: "Modern Hall & Kitchen Design",
        category: "Hall",
        description: "Warm and inviting bedroom with soft textiles and ambient lighting",
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        title: "Elegant Office",
        category: "Office",
        description: "Professional workspace with custom built-ins and ergonomic design",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1722153149743-ba06a36441d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Spa-like Bathroom",
        category: "Bathroom",
        description: "Luxurious bathroom with freestanding tub and natural stone finishes",
    },
    
];

const categories = ["All", "Living Room", "Bedroom", "Office", "Bathroom", "Pooja Room"];

const GalleryPage = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");


    // Filtered designs
    const filteredDesigns =
        selectedCategory === "All"
            ? interiorDesigns
            : interiorDesigns.filter((d) => d.category === selectedCategory);


    // Modal handlers
    const handleOpen = (design) => {
        setSelectedImage(design);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    // Toggle favorite
    const toggleFavorite = (id, e) => {
        e.stopPropagation();
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((fav) => fav !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };



    return (
        <>
            <Navbar />
            <Box
                sx={{
                    minHeight: "100vh",
                    background: "white",
                    py: { xs: 6, md: 8 },
                }}
            >
                <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 6 } }}>
                    {/* Hero Section */}
                    

                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                variant={selectedCategory === category ? "filled" : "outlined"}
                                sx={{
                                    px: 2,
                                    py: 1,
                                    fontWeight: 600,
                                    borderRadius: "20px",
                                    ...(selectedCategory === category && {
                                        background: "linear-gradient(45deg,#5b4bdb,#FCC61D)",
                                        color: "white",
                                    }),
                                }}
                            />
                        ))}
                    </Box>

                    {/* Gallery Grid */}
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        {filteredDesigns.map((design) => (
                            <Grid item xs={12} sm={6} md={4} key={design.id}>
                                <Card
                                    onClick={() => handleOpen(design)}
                                    sx={{
                                        borderRadius: 5,
                                        overflow: "hidden",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                                        cursor: "pointer",
                                        transition: "all 0.35s ease",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                                        },
                                    }}
                                >
                                    <Box sx={{ position: "relative" }}>
                                        <CardMedia
                                            component="img"
                                            image={design.src}
                                            alt={design.title}
                                            sx={{ width: "100%", height: 260, objectFit: "cover" }}
                                        />
                                        <IconButton
                                            onClick={(e) => toggleFavorite(design.id, e)}
                                            sx={{
                                                position: "absolute",
                                                top: 12,
                                                right: 12,
                                                bgcolor: "rgba(255,255,255,0.8)",
                                                "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                                            }}
                                        >
                                            {favorites.includes(design.id) ? (
                                                <FavoriteIcon color="error" />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </IconButton>
                                    </Box>

                                    <Box sx={{ p: 2 }}>
                                        <Typography variant="h6" fontWeight={700}>
                                            {design.title}
                                        </Typography>
                                        <Chip
                                            label={design.category}
                                            size="small"
                                            sx={{
                                                mt: 1,
                                                fontWeight: 600,
                                                bgcolor: "#f3f0ff",
                                                color: "#FCC61D",
                                            }}
                                        />
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            {design.description}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>


                    {/* Modal */}
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Transition}
                        maxWidth="md"
                        fullWidth
                        scroll="body"
                        PaperProps={{
                            sx: {
                                borderRadius: 4, // smooth rounded corners
                                overflow: "hidden",
                                bgcolor: "rgba(20,20,20,0.95)", // elegant dark background
                                boxShadow: "0 12px 40px rgba(0,0,0,0.6)", // luxury shadow
                            },
                        }}
                    >
                        <DialogContent sx={{ p: 0 }}>
                            {selectedImage && (
                                <Box sx={{ textAlign: "center" }}>
                                    {/* Image */}
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            maxHeight: "70vh",
                                            objectFit: "cover",
                                            borderTopLeftRadius: "16px",
                                            borderTopRightRadius: "16px",
                                        }}
                                    />

                                    {/* Content */}
                                    <Box
                                        sx={{
                                            p: { xs: 3, md: 5 },
                                            color: "white",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                fontWeight: 700,
                                                background: "linear-gradient(90deg, #ffffffff, #ffffffff)",
                                                WebkitBackgroundClip: "text",
                                                color: "transparent",
                                            }}
                                        >
                                            {selectedImage.title}
                                        </Typography>

                                        <Chip
                                            label={selectedImage.category}
                                            sx={{
                                                mb: 2,
                                                bgcolor: "#FCC61D",
                                                color: "white",
                                                fontWeight: 600,
                                                borderRadius: "8px",
                                            }}
                                        />

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                maxWidth: 600,
                                                mx: "auto",
                                                opacity: 0.9,
                                                fontSize: "1.05rem",
                                            }}
                                        >
                                            {selectedImage.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </DialogContent>
                    </Dialog>

                </Container>
            </Box>
        </>
    );
};

export default GalleryPage;
