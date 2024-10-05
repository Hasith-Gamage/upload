import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

// Import your images (assuming they are stored locally)
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image1.jpg';
import img3 from '../assets/image1.jpg';



// Store images in an array
const images = [img1, img2, img3];


export default function Menu() {
  return (
    <div>
      <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={3}>
              {images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <img
                    src={image}
                    alt={`Photo ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '150%',
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
    </div>

  ) 
};