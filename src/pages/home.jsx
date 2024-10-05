import React from 'react';
import './Home.css';

import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import { LocalPizza, TwoWheeler, Cake } from '@mui/icons-material';

// Import your images (assuming they are stored locally)
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image1.jpg';
import img3 from '../assets/image1.jpg';
import img4 from '../assets/image1.jpg';
import img5 from '../assets/image1.jpg';
import img6 from '../assets/image1.jpg';

// Store images in an array
const images = [img1, img2, img3, img4, img5, img6];

const services = [
  {
    icon: <LocalPizza fontSize="large" />,
    title: 'Fresh Pizza',
    description: 'We serve fresh, hand-tossed pizzas with artisanal ingredients, delivering authentic and delicious flavors.',
  },
  {
    icon: <TwoWheeler fontSize="large" />,
    title: 'Fast & Fresh Delivery',
    description: 'We offer fast delivery, ensuring hot, fresh pizzas arrive quickly to satisfy your cravings.',
  },
  {
    icon: <Cake fontSize="large" />,
    title: 'Sweet Desserts',
    description: 'Our appetizers and desserts are deliciously crafted, offering a perfect start and sweet finish.',
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <Grid item xs={12} md={4}>
    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', backgroundColor: '#000' }}>
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
        <Box sx={{ color: 'black', fontSize: 40, }}>{icon}</Box>
      </Box>
      <Typography variant="h6" component="h3" sx={{ marginTop: 2, color: '#ffb703', fontWeight: 700, }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 1, color: 'white' }}>
        {description}
      </Typography>
    </Paper>
  </Grid>
);

export default function Home() {
  return (

    <>
      <div className="contact-container">
        <div className="overlay"></div>
        <div className="content">
          <h1>Home</h1>
          <p>
            Welcome to our contact page! Feel free to reach out to us with any questions, comments, or inquiries.
            Our team is here to help you and provide the best customer service possible.
          </p>
        </div>
      </div><div>
        <Container sx={{ marginTop: 4 }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Grid>
          <h1 style={{ textAlign: 'center', color: '#ffb703' }}>Suit To Your Craving</h1>
          <h1 style={{ color: '#ffb703' }}>Bit Of Memories</h1>
          <Container sx={{ marginTop: 4 }}>
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
                    // Adding a hover effect
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </div>
    </>


  )
};
