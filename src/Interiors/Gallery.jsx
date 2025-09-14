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

// Transition for modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Sample interior designs
const interiorDesigns = [
  {
    id: 1,
    src: interior,
    title: "Modern Living Room",
    category: "Living Room",
    description: "Contemporary design with minimalist furniture and natural lighting",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/800x800/?luxury,kitchen,interior",
    title: "Luxury Kitchen",
    category: "Kitchen",
    description: "High-end kitchen with premium appliances and marble countertops",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/800x700/?luxury,bedroom,interior",
    title: "Cozy Bedroom",
    category: "Bedroom",
    description: "Warm and inviting bedroom with soft textiles and ambient lighting",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/800x500/?luxury,office,interior",
    title: "Elegant Office",
    category: "Office",
    description: "Professional workspace with custom built-ins and ergonomic design",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/800x900/?luxury,bathroom,interior",
    title: "Spa-like Bathroom",
    category: "Bathroom",
    description: "Luxurious bathroom with freestanding tub and natural stone finishes",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/800x650/?luxury,diningroom,interior",
    title: "Contemporary Dining",
    category: "Dining Room",
    description: "Sleek dining area with statement lighting and custom table",
  },
];

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Office", "Bathroom", "Dining Room"];

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
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fb 0%, #eceff5 100%)",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              background: "linear-gradient(90deg, #5b4bdb 0%, #8c7df0 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Design Gallery
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            Explore a curated collection of luxury interiors that inspire elegance,
            comfort, and timeless design.
          </Typography>
        </Box>
        
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
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
                    background: "linear-gradient(45deg,#5b4bdb,#8c7df0)",
                    color: "white",
                  }),
                }}
              />
            ))}
          </Box>

           {/* Gallery Grid */}
        <Grid container spacing={4}>
          {filteredDesigns.map((design) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={design.id}>
              {/* same Card design as before */}
            </Grid>
          ))}
        </Grid>

        {/* Gallery Grid */}
       <Grid container spacing={4}>
  {filteredDesigns.map((design) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={design.id}>
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
            sx={{
              height: 260,
              objectFit: "cover",
              transition: "transform 0.4s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
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
              color: "#5b4bdb",
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
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
              background: "linear-gradient(90deg, #7b5ce7, #a78afc)",
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
              bgcolor: "#5b4bdb",
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
  );
};

export default GalleryPage;
