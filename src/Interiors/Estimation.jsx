import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Typography,
  IconButton,
  Alert
} from '@mui/material';
import { Close, Phone } from '@mui/icons-material';

const FreeEstimateButton = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setSubmitted(false);
    setFormData({ name: '', phone: '' });
    setErrors({});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (validateForm()) {
    try {
      const response = await fetch('https://ruki-likely.onrender.com/Interiors/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

       setTimeout(() => {
        handleClose();
      }, 3000);


       console.log('Form submitted:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again later.');
    }
  }
};


  return (
    <>
      <Button 
        variant="contained" 
        color="secondary" 
        sx={{ ml: 2 }}
        onClick={handleOpen}
      >
        Free Estimate
      </Button>

      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
          }
        }}
      >
        <DialogTitle sx={{ 
          m: 0, 
          p: 3,
          background: 'linear-gradient(45deg, #FCC61D 0%, black 100%)',
          color: 'white',
          position: 'relative'
        }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
            Request Free Estimate
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: 'white',
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 3 }}>
          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you! We've received your information and will contact you shortly.
              </Alert>
              <Typography variant="body1" color="text.secondary">
                Our team will reach out to you within 24 hours to discuss your project.
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 10 }}
                autoComplete="tel" 
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
                InputProps={{
                  startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} />
                }}
              />

              <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                We respect your privacy and will never share your information with third parties.
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ 
          p: 3, 
          justifyContent: submitted ? 'center' : 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 1
        }}>
          {!submitted && (
            <>
              <Button 
                onClick={handleClose} 
                variant="outlined"
                sx={{ 
                  borderRadius: 2,
                  order: { xs: 2, sm: 1 }
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit} 
                variant="contained"
                sx={{ 
                  borderRadius: 2,
                  background: 'linear-gradient(45deg, #FCC61D 0%, #eab463ff 100%)',
                  order: { xs: 1, sm: 2 }
                }}
              >
                Submit Request
              </Button>
            </>
          )}
          {submitted && (
            <Button 
              onClick={handleClose} 
              variant="contained"
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(45deg, #FCC61D 0%, rgba(234, 180, 99, 1)00%)',
              }}
            >
              Close
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FreeEstimateButton;