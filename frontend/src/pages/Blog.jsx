import React from 'react'
import Header from "../components/Header/Header";
import BlogContent from '../components/BlogContent/BlogContent';
import BlogSileBar from '../components/BlogSileBar/BlogSileBar'
import Footer from '../components/Footer/Footer';

function Blog() {
  return (
    <div>
        <Header/>
        <div className='blogContainer'>
            <div className='sileBar'>
                <BlogSileBar/>
            </div>
            <div className='product'>
              <BlogContent/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog