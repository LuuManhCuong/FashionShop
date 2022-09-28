import React from 'react'

import DetailBlogContent from '../components/DetailBlogContent/DetailBlogContent'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
function BlogDetail() {
  return (
    <>
      <Header />
      <div className='detailBlogContainer'>
        <DetailBlogContent />
      </div>
        <Footer/>

    </>
  )
}

export default BlogDetail