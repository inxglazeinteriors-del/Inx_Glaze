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
  Container
} from "@mui/material";
import {
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon
} from "@mui/icons-material";

// Transition for the modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Sample interior design images with categories
const interiorDesigns = [
  { 
    id: 1, 
    src: "https://source.unsplash.com/800x600/?interior,livingroom,modern", 
    title: "Modern Living Room", 
    category: "Living Room",
    description: "Contemporary design with minimalist furniture and natural lighting"
  },
  { 
    id: 2, 
    src: "https://source.unsplash.com/800x800/?interior,kitchen,luxury", 
    title: "Luxury Kitchen", 
    category: "Kitchen",
    description: "High-end kitchen with premium appliances and marble countertops"
  },
  { 
    id: 3, 
    src: "https://source.unsplash.com/800x700/?interior,bedroom,cozy", 
    title: "Cozy Bedroom", 
    category: "Bedroom",
    description: "Warm and inviting bedroom with soft textiles and ambient lighting"
  },
  { 
    id: 4, 
    src: "https://source.unsplash.com/800x500/?interior,office,elegant", 
    title: "Elegant Office", 
    category: "Office",
    description: "Professional workspace with custom built-ins and ergonomic design"
  },
  { 
    id: 5, 
    src: "https://source.unsplash.com/800x900/?interior,bathroom,spa", 
    title: "Spa-like Bathroom", 
    category: "Bathroom",
    description: "Luxurious bathroom with freestanding tub and natural stone finishes"
  },
  { 
    id: 6, 
    src: "https://source.unsplash.com/800x650/?interior,dining,contemporary", 
    title: "Contemporary Dining", 
    category: "Dining Room",
    description: "Sleek dining area with statement lighting and custom table"
  },
  { 
    id: 7, 
    src: "https://source.unsplash.com/800x750/?interior,livingroom,scandinavian", 
    title: "Scandinavian Lounge", 
    category: "Living Room",
    description: "Light-filled space with natural materials and functional design"
  },
  { 
    id: 8, 
    src: "https://source.unsplash.com/800x550/?interior,kitchen,farmhouse", 
    title: "Farmhouse Kitchen", 
    category: "Kitchen",
    description: "Rustic charm with modern amenities and shaker-style cabinetry"
  }
];

// All available categories
const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Office", "Bathroom", "Dining Room"];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Filter designs based on selected category
  const filteredDesigns = selectedCategory === "All" 
    ? interiorDesigns 
    : interiorDesigns.filter(design => design.category === selectedCategory);

  // Handle opening modal with selected image
  const handleOpen = (design) => {
    setSelectedImage(design);
    setOpen(true);
  };

  // Handle closing modal
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  // Toggle favorite status
  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      py: 5,
      px: { xs: 2, sm: 3, md: 4 }
    }}>
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h3"
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: 'linear-gradient(45deg, #6b5ce7 30%, #8a7df0 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Design Gallery
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
            Explore our curated collection of interior design projects and find inspiration for your space
          </Typography>
          
          {/* Category Filter Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "filled" : "outlined"}
                color="primary"
                sx={{ 
                  px: 1, 
                  py: 2,
                  fontWeight: 600,
                  ...(selectedCategory === category && {
                    background: 'linear-gradient(45deg, #6b5ce7 30%, #8a7df0 90%)',
                    color: 'white'
                  })
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {filteredDesigns.map((design) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={design.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: 'pointer',
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                    "& .media-overlay": {
                      opacity: 1
                    }
                  },
                }}
                onClick={() => handleOpen(design)}
              >
                {/* Image with overlay */}
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={design.src}
                    alt={design.title}
                    sx={{ height: 280, objectFit: "cover" }}
                  />
                  <Box 
                    className="media-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      p: 2,
                      color: 'white'
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      {design.title}
                    </Typography>
                    <IconButton 
                      color="inherit" 
                      onClick={(e) => toggleFavorite(design.id, e)}
                      sx={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      {favorites.includes(design.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                  </Box>
                </Box>
                
                <Box sx={{ p: 2 }}>
                  <Chip 
                    label={design.category} 
                    size="small" 
                    color="primary" 
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {design.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Image Modal */}
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          maxWidth="md"
          fullWidth
          scroll="body"
        >
          <AppBar position="sticky" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
              <IconButton
                edge="start"
                onClick={handleClose}
                aria-label="close"
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  "&:hover": {
                    bgcolor: 'rgba(0,0,0,0.7)'
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton 
                sx={{ 
                  color: 'white',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  "&:hover": {
                    bgcolor: 'rgba(0,0,0,0.7)'
                  }
                }}
                onClick={(e) => toggleFavorite(selectedImage?.id, e)}
              >
                {selectedImage && favorites.includes(selectedImage.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent sx={{ p: 0, bgcolor: 'rgba(0,0,0,0.9)' }}>
            {selectedImage && (
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    maxHeight: '80vh',
                    objectFit: 'contain'
                  }}
                />
                <Box sx={{ p: 3, color: 'white' }}>
                  <Typography variant="h5" gutterBottom>
                    {selectedImage.title}
                  </Typography>
                  <Chip 
                    label={selectedImage.category} 
                    color="primary" 
                    sx={{ mb: 2 }} 
                  />
                  <Typography variant="body1">
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