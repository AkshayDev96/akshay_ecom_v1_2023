import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ImageSlider from '../components/layout/Sliders/ImageSlider'
import Home_Featured_Products from '../components/layout/Products/Home_Featured_Products'


const Home = () => {
  return (
    <>
      <Header/>
      <ImageSlider/>
      <Home_Featured_Products/>
      <Footer/>
    </>
  )
}

export default Home