import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
function DefaultLayout({children}) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout