import { Container } from '@mui/material'
import React from 'react'
import FoodList from '../components/foodList'

const Home = () => {
  return (
    <main  >
    <Container sx={{ marginTop: '6%', marginBottom:'8%' }}>
      <FoodList />
    </Container>
  </main>
  )
}

export default Home
