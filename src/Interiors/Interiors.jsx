import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  IconButton,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  alpha,
  Paper,
  Link,
  Fab,
  Zoom,
  
} from '@mui/material';
import { 
  ArrowBack, 
  Phone,
  ArrowForward, 
  Menu as MenuIcon,
  Favorite,
  Star,
  LocationOn,
  DesignServices,
  CheckCircle,
  East
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import interiors_Img1 from '../Interior_Images/Living.jpg';
import interiors_Img2 from '../Interior_Images/House.jpg'
import interiors_Img3 from '../Interior_Images/Bed.jpg'
import interiors_Img4 from '../Interior_Images/Kavundampalayam.jpg'
import FreeEstimateButton from './Estimation';
import Pooja from '../Interior_Images/pooja.jpg'
import Saloon from '../Interior_Images/Saloon.jpg'
import Blue from '../Interior_Images/Blue.jpg'
import PoojaDoor from '../Interior_Images/PoojaDoor.jpg'
import stairs from '../Interior_Images/Stairs.jpg'

// Create a custom theme for elegance
const theme = createTheme({
  palette: {
    primary: {
      main: '#FCC61D', // Deep blue-gray 500073 FCC61D
      light: 'white ',
    },
    secondary: {
      main: '#000000ff', // Warm gold
    },
    background: {
      default: '#f9f9f9',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      color: 'white',
    },
    h4: {
      fontWeight: 600,
      color: 'white',
    },
    body1: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

// Carousel data
const carouselItems = [
  {
    id: 1,
    title: 'Modern Luxury Living Room',
    description: 'Elegant living spaces with premium finishes and custom furniture',
    image: interiors_Img1
  },
  {
    id: 2,
    title: 'Contemporary Kitchen Design',
    description: 'State-of-the-art kitchens with smart storage solutions',
    image: interiors_Img2,
  },
  {
    id: 3,
    title: 'Minimalist Bedroom Retreat',
    description: 'Serene bedrooms designed for ultimate relaxation',
    image: interiors_Img3
  },
  {
    id: 4,
    title: 'Executive Office Spaces',
    description: 'Productivity-enhancing workspaces with elegant design',
    image: 'https://plus.unsplash.com/premium_photo-1661901536122-72801ec13abd?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    title: 'Elegant Bathroom Designs',
    description: 'Bathrooms that blend sophistication with timeless design.',
    image: "https://images.unsplash.com/photo-1722153149743-ba06a36441d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const InteriorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  const goToSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  return (
    <Box sx={{ position: 'relative', height: isMobile ? '70vh' : '80vh', overflow: 'hidden' }}>
      <Box 
        sx={{
          backgroundImage: `url(${carouselItems[currentIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          transition: 'all 0.5s ease-in-out',
          opacity: fade ? 1 : 0,
        }}
      >
        <Box 
          sx={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
            width: '100%',
            padding: 4,
            color: 'white',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant={isMobile ? "h4" : "h2"} gutterBottom>
              {carouselItems[currentIndex].title}
            </Typography>
            <Typography variant={isMobile ? "body1" : "h6"} sx={{ maxWidth: '600px' }}>
              {carouselItems[currentIndex].description}
            </Typography>
          </Container>
        </Box>
      </Box>

      {/* Navigation Arrows */}
      <IconButton 
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.4)' },
        }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton 
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.4)' },
        }}
      >
        <ArrowForward />
      </IconButton>

      {/* Indicators */}
      <Box sx={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
        {carouselItems.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'secondary.main' : 'rgba(255,255,255,0.5)',
              margin: '0 4px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const menuItems = [
    'HOME', 'GALLERY', 'SERVICES', 'CONTACT'
  ];

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <DesignServices sx={{ mr: 1 }} /> */}
          <Typography variant="h6" component="div" fontWeight={600}>
            Inx Glaze Solution
          </Typography>
        </Box>
        
        {!isMobile && (
          <Box sx={{ display: 'flex' }}>
            {menuItems.map((item) => (
              <Button color="inherit" key={item} sx={{ mx: 0.5, color: 'Black', fontWeight: 600 }}>
                {item}
              </Button>
            ))}
          </Box>
        )}
        
        <FreeEstimateButton />
      </Toolbar>
      
      <Box sx={{ 
        backgroundColor: 'primary.light', 
        color: 'black', 
        py: 0.5,
        textAlign: 'center',
      }}>

        <Typography variant="body2" >BENGALURU -{" "}
          <span style={{ color: "black",  fontWeight: 600 }}>COIMBATORE</span> - CHENNAI - KERALA
        </Typography>
      </Box>
    </AppBar>
  );
};


const FeaturedProjects = () => {
  const projects = [
    {
      title: 'House Renovation',
      location: 'Coimbatore, Tamil Nadu',
      image: interiors_Img4
    },
    {
      title: 'Pooja Room outlook',
      location: 'Coimbatore, Tamil Nadu',
      image: Pooja
    },
    {
      title: 'Pooja Room Interior',
      location: 'Coimbatore, Tamil Nadu',
      image: PoojaDoor
    },
    {
      title: 'Salon Interior Design',
      location: 'Coimbatore, Tamil Nadu',
      image: Saloon
    },
    {
      title: 'Cupboard Room',
      location: 'Coimbatore, Tamil Nadu',
      image: Blue
    },
    {
      title: 'Brown Stairs Design',
      location: 'Chennai, Tamil Nadu',
      image: stairs
    },
    {
      title: 'Luxury Villa Interior',
      location: 'Thrissur, Kerala',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
    },
    {
      title: 'Modern Apartment',
      location: 'Bengaluru, Karnataka',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      title: 'Living Room Design',
      location: 'Chennai, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Corporate Office',
      location: 'Chennai, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80'
    },
    {
      title: 'Bar Interior Design',
      location: 'Delhi, India',
      image: 'https://images.unsplash.com/photo-1572299448190-d7a84f6e6bc9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
     {
      title: 'IT Office Design',
      location: 'Chennai, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1625250564384-a46e5eb9d89c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'
    },
    {
      title: 'Bathroom Interior',
      location: 'Coimbatore, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1643949719317-4342d8d4031e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Kitchen ChicSpace',
      location: 'Delhi, India',
      image: 'https://plus.unsplash.com/premium_photo-1686090448331-206895954c61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGtpdGNoZW4lMjBtb2RlbiUyMGludGVyaW9yc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Resort Interior Design',
      location: 'Goa, India',
      image: 'https://images.unsplash.com/photo-1728495003159-03114eb07727?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'
    },
    
  ];

  return (
    <Box sx={{ backgroundColorx: 'black', py: { xs: 4, sm: 8 }, width: '100%', overflow: 'hidden' }}>
  <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
    <Typography 
      variant="h4" 
      align="center" 
      gutterBottom 
      sx={{ mb: { xs: 4, sm: 6 }, color: 'white', px: { xs: 1, sm: 2 } }}
    >
      Featured Projects
    </Typography>

    <Grid container spacing={2} justifyContent="center">
      {projects.map((project, index) => (
        <Grid 
          item 
          xs={12}      // full width on mobile
          sm={6}       // 2 per row on tablets
          md={4}       // 3 per row on desktop
          key={index} 
          sx={{ display: 'flex', justifyContent: 'center', p: { xs: 1, sm: 2 } }}
        >
          <Card 
            sx={{ 
              overflow: 'hidden',
              transition: 'transform 0.3s',
              width: '100%',
              maxWidth: { xs: '100%', sm: 400 }, 
              mx: 0,
              '&:hover': {
                transform: 'scale(1.03)',
                '& .project-image': {
                  transform: 'scale(1.1)'
                }
              }
            }}
          >
            <Box sx={{ overflow: 'hidden', height: { xs: 180, sm: 250 } }}>
              <Box
                className="project-image"
                sx={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100%',
                  transition: 'transform 0.5s',
                }}
              />
            </Box>

            <CardContent sx={{ px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 2 } }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {project.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn color="primary" sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  {project.location}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

  );
};
const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showCallButton, setShowCallButton] = useState(true);

  const services = [
    {
      icon: <DesignServices sx={{ fontSize: 40 }} />,
      title: 'Interior Design',
      description: 'Complete interior design solutions for homes and offices with personalized themes and concepts.'
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40 }} />,
      title: 'Space Planning',
      description: 'Optimize your space with our expert planning services for maximum functionality and aesthetics.'
    },
    {
      icon: <Star sx={{ fontSize: 40 }} />,
      title: 'Custom Furniture',
      description: 'Bespoke furniture designed to fit your space perfectly and reflect your personal style.'
    },
    {
      icon: <Favorite sx={{ fontSize: 40 }} />,
      title: 'Decor Selection',
      description: 'Curated decor items to complete your interior design with the perfect finishing touches.'
    }
  ];


  const handleCallButtonClick = () => {
    window.location.href = 'tel:+91 99430 99996';
  };

  return (
    <>
      <Container sx={{ 
        py: 10, 
        position: 'relative',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
        borderRadius: { xs: 0, md: 4 },
        mb: 4
      }}>
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 200,
            height: 200,
            background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
            borderRadius: '50%',
            zIndex: 0,
            display: { xs: 'none', md: 'block' }
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: -30,
            left: -30,
            width: 150,
            height: 150,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
            borderRadius: '50%',
            zIndex: 0,
            display: { xs: 'none', md: 'block' }
          }}
        />

        <Box position="relative" zIndex={1}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #000000ff 30%, #FCC61D 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Premium Services
          </Typography>
          
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              mb: 8,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              fontWeight: 400
            }}
          >
            Transforming spaces with innovative design solutions and exceptional craftsmanship
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    background: 'white',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      '& .service-icon': {
                        background: theme.palette.secondary.main,
                        color: 'white',
                        transform: 'scale(1.1)'
                      },
                      '& .service-arrow': {
                        opacity: 1,
                        transform: 'translateX(5px)'
                      }
                    }
                  }}
                >
                  <Box 
                    className="service-icon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 100,
                      background: alpha(theme.palette.secondary.main, 0.1),
                      color: theme.palette.secondary.main,
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    {service.icon}
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {service.description}
                      </Typography>
                      <Box 
                        className="service-arrow"
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          color: theme.palette.secondary.main,
                          fontWeight: 600,
                          opacity: 0.7,
                          transition: 'all 0.3s ease-in-out',
                          mt: 2
                        }}
                      >
                        Learn more
                        <East sx={{ fontSize: 18, ml: 0.5 }} />
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Floating Call Button */}
      <Zoom in={showCallButton}>
        <Fab
          color="primary"
          aria-label="call"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 60,
            height: 60,
            background: 'linear-gradient(45deg, green 30%, #08f00cff 90%)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            '&:hover': {
              background: 'linear-gradient(45deg, green 30%, #08f00cff 90%)',
              transform: 'scale(1.1)'
            }
          }}
          onClick={handleCallButtonClick}
        >
          <Phone sx={{ color: 'white', fontSize: 28 }} />
        </Fab>
      </Zoom>
    </>
  );
};



const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'black', py: 4 , fontWeight: 'bold' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Inx Glaze Solutions
            </Typography>
            <Typography variant="body2">
              Creating beautiful spaces across South India with a focus on contemporary design and functionality.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
               📍 Coimbatore, TamilNadu<br />
             
               <Link href="tel:+9199430 99996" underline="hover" color="inherit">
               📞 +91 99430 99996

               </Link> <br />
              <Link href="https://www.inxglazeinteriors@gmail.com" target="_blank" rel="noopener" underline="hover" color="inherit">
               📧 Email:  inxglazeinteriors@gmail.com
              </Link>{' '}
              
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2">
                <Link href="https://www.instagram.com" target="_blank" rel="noopener" underline="hover" color="inherit">
                  Instagram
                </Link>{' '}
                |{' '}
                <Link href="https://www.facebook.com" target="_blank" rel="noopener" underline="hover" color="inherit">
                  Facebook
                </Link>{' '}
                |{' '}
                <Link href="https://www.pinterest.com" target="_blank" rel="noopener" underline="hover" color="inherit">
                  Pinterest
                </Link>
              </Typography>
          </Grid>
          
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Inx Glaze Solutions . All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <InteriorCarousel />
        <FeaturedProjects />
        <ServicesSection />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;