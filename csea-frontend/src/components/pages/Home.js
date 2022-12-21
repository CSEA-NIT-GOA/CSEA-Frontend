import React from 'react'
import Footer from '../Footer'
import Gallery from '../Gallery'
import '../HeroSection'
import Herosection from '../HeroSection'
import '../../index.css'
import Animation from '../animation'
function Home() {
  return (
    <>
      <Herosection/>
      <div className='p-4 my-2 flex-auto justify-items-center'>
        <Animation/>
        <Gallery/>
      </div>  
      <Footer/>
    </>
  )
}

export default Home