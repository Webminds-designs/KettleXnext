import React from 'react'
import Header from '../components/Header'
import Hero from '../aboutus/Hero'
import Stat from '../aboutus/Stat'
import ChooseUs from './ChooseUs'
import Footer from '../components/Footer'

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <Stat />
      <ChooseUs />
      <Footer />
    </>
  )
}
