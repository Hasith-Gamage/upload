import React, { useState, useEffect } from 'react';
import './Home.css';
import { Container, Grid, Typography, Paper, Box, Button, IconButton, SvgIcon } from '@mui/material';
import { LocalPizza, TwoWheeler, Cake } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation

// Import images
import img1 from '../assets/image4.jpg';
import img2 from '../assets/image11.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image6.jpg';
import img5 from '../assets/image20.jpg';
import img6 from '../assets/image7.jpg';
import img7 from '../assets/image9.jpg';
import img8 from '../assets/image5.jpg';
import img9 from '../assets/image10.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image37.jpg';

// Array of images
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

// Service details with icons and descriptions
const services = [
  {
    icon: <LocalPizza fontSize="large" />,
    title: 'Fresh Pizza',
    description: 'We serve fresh, hand-tossed pizzas with artisanal ingredients.',
  },
  {
    icon: <TwoWheeler fontSize="large" />,
    title: 'Fast & Fresh Delivery',
    description: 'We offer fast delivery, ensuring hot, fresh pizzas arrive quickly.',
  },
  {
    icon: <Cake fontSize="large" />,
    title: 'Sweet Desserts',
    description: 'Our desserts are deliciously crafted, offering a perfect sweet finish.',
  },
];

// Create a service card component
const ServiceCard = ({ icon, title, description }) => {
  const [clicked, setClicked] = useState(false);

  const handleCardClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); // Reset animation after 500ms
  };

  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={3}
        className={`service-card ${clicked ? 'clicked' : ''}`}
        onClick={handleCardClick}
        sx={{ padding: 2, textAlign: 'center', backgroundColor: '#000', cursor: 'pointer' }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: '#ffb703',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
          <Box sx={{ color: 'black', fontSize: 40 }}>{icon}</Box>
        </Box>
        <Typography variant="h6" component="h3" sx={{ marginTop: 2, color: '#ffb703', fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1, color: 'white' }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
};

// Social Media Icons
const FacebookIconComponent = () => (
  <IconButton color="primary" aria-label="Facebook" onClick={() => window.open('https://www.facebook.com', '_blank')}>
    <FacebookIcon />
  </IconButton>
);

const YouTubeIconComponent = () => (
  <IconButton color="secondary" aria-label="YouTube" onClick={() => window.open('https://www.youtube.com', '_blank')}>
    <YouTubeIcon />
  </IconButton>
);

// Custom TikTok Icon Component
const TikTokIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M22.54 7.33a5.18 5.18 0 01-3.29-1.15 5.52 5.52 0 01-1.93-2.68 5.54 5.54 0 01-.26-1.73h-3.36v12.9a4.19 4.19 0 11-2.4-3.81V8.45a7.76 7.76 0 00-1.87-.24 7.76 7.76 0 00-5.45 2.16 7.34 7.34 0 00-2.25 5.27A7.61 7.61 0 007.57 21a7.67 7.67 0 005.39 2.12A7.6 7.6 0 0018.4 21a7.48 7.48 0 003-5.92V10.57a6.8 6.8 0 001.14.1 5.2 5.2 0 001.47-.21V7.32z" />
  </SvgIcon>
);

const TikTokIconComponent = () => (
  <IconButton color="primary" aria-label="TikTok" onClick={() => window.open('https://www.tiktok.com', '_blank')}>
    <TikTokIcon />
  </IconButton>
);

// WhatsApp Icon Component
const WhatsAppIconComponent = () => (
  <IconButton color="success" aria-label="WhatsApp" onClick={handleWhatsAppClick}>
    <WhatsAppIcon />
  </IconButton>
);

const handleWhatsAppClick = () => {
  const message = "Hello, I would like to give feedback.";
  const phoneNumber = "94777162262"; // Replace with your WhatsApp number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

// Feedback Button Component
const FeedbackButton = () => {
  

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<WhatsAppIcon />}
      onClick={handleWhatsAppClick}
    >
      Send Feedback on WhatsApp
    </Button>
  );
};

export default function Home() {
  const [currentImage, setCurrentImage] = useState(image1); // Default image

  useEffect(() => {
    // Set up a timer to alternate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="contact-container" style={{ backgroundImage: `url(${currentImage})` }}>
        <div className="overlay"></div>
        <div className="content">
          <h1>Home</h1>
          <p>Welcome to our contact page! Feel free to reach out to us with any questions, comments, or inquiries. Our team is here to help you and provide the best customer service possible.</p>
        </div>
      </div>

      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Grid>
        <h1 style={{ textAlign: 'center', color: '#ffb703' }}>Suit To Your Craving</h1>
        <h1 style={{ textAlign: 'center', color: '#ffb703' }}>Bit Of Memories</h1>

        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <img
                src={image}
                alt={`Photo ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', color: 'white' }}>
        <div>
          <h2>ChefD</h2>
          <FacebookIconComponent />
          <YouTubeIconComponent />
          <TikTokIconComponent />
          <WhatsAppIconComponent />
        </div>
        <div>
          <h2>Our Location</h2>
          <p>No92, Dikhena Dodangoda.</p>
          <p>Get Direction</p>
          <h2>Rannagala chefD</h2>
          <p>Get Direction</p>
        </div>
        <div>
        <h2>Quick Link</h2>
         
          <p>Home</p>
          <Link to="/menu">
          <p >Menu</p>
          </Link>
        
          <p>About Us</p>
          <p>Contact Us</p>
        </div>


        
        <div>
          <h2>Opening Hours</h2>
          <p>Monday to Sunday 11.00AM - 10.30PM</p>
          <Button
            variant="outlined"
            sx={{
              color: '#ffb703',
              borderColor: '#ffb703',
              backgroundColor: 'transparent',
              padding: '10px 20px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#ffb703',
                color: 'black',
                borderColor: '#ffb703',
              },
            }}
          >
            TABLE RESERVATIONS
          </Button>
        </div>
      </div>
    </>
  );
}

