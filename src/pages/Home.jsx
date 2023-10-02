import React from 'react'
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from '../components/Header';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home