import React from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import OrderManagement from '../components/OrderManagement/OrderManagement';

function OrderManagementPage() {
  return (
    <>
      <Header/>
      <OrderManagement/>
      <Footer/>
    </>
  )
}

export default OrderManagementPage;