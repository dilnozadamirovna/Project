import React from 'react'
import Header from '../components/Header/Header'
import Carousel1 from '../components/Carousel1/Carousel1'
import Popular from '../components/Popular/Popular'
import About from '../components/About/About'
import Trip from '../components/Trip/Trip'
import Gallery from '../components/Gallery/Gallery'
import Feedback from '../components/Feedback/Feedback'
import Email from '../components/Email/Email'
import Footer from '../components/Footer/Footer'
export default function HomePage() {
  return (
  <>
  <Header />
  <Carousel1 />
    <Popular />
    <About />
    <Trip />
<Gallery />
<Feedback />
<Email />
<Footer />
  
  </>
  )
}
