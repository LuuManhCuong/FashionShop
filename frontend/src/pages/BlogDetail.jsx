import React from 'react'

import DetailBlogContent from '../components/DetailBlogContent/DetailBlogContent'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import InputText from '../components/InputText/InputText'
import Comment from '../components/Comment/Comment'
function BlogDetail() {
  return (
    <>
      <Header />
      <div className='detailBlogContainer'>
        <DetailBlogContent />
        <div className='commentBlog'>
            <InputText/>
            <Comment/>
            <Comment/>
        </div>
      </div>
        <Footer/>

    </>
  )
}

export default BlogDetail