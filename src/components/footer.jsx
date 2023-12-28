import React from 'react'
import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ bgcolor:'#F1592A' , color:'white'}} mt={5}>
        <Container>
            <Typography textAlign={'center'} pt={3} pb={3} >
                Welcome to our Tunisian food website! We take pride in presenting to you a comprehensive list of traditional Tunisian foods and their ingredients.
                Our website is dedicated to showcasing the rich culinary heritage of Tunisia and its diverse flavors.
            </Typography>
        </Container>
        </Box>
    )
}
