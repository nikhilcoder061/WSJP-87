import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {

  const name = "wscubetech";
  const email = "ws@gmail.com";
  const phone = 74185296

  return (
    <>
      <Header uname={name} uemail={email} uphone={phone} />
      <Footer />
    </>
  )
}

//  props - Parent to child data transfer