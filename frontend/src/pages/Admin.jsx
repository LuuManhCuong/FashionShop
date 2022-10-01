import React from 'react'
import BlogSileBar from '../components/BlogSileBar/BlogSileBar'
import DataCustomer from '../components/DataCustomer/DataCustomer'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
function Admin() {
  return (
    <>
    <Header/>
    <div className="admin-container">
        <div><BlogSileBar/></div>
        <div className='admin-content'><DataCustomer/></div>
    </div>
    <Footer/>
    </>

  )
}

export default Admin