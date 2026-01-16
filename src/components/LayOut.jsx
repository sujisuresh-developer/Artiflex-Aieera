import React from 'react'
import { Outlet } from 'react-router-dom'
import Hero from './Hero'
import Footer from './Footer'

function LayOut() {
  return (
    <>
     <Hero />
        <Outlet />
     <Footer/>

    </>
  )
}

export default LayOut