import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import BlogSileBar from '../components/BlogSileBar/BlogSileBar'
import OverViewContent from '../components/OverviewContent/OverViewContent'
function AdimOverView() {
  return (
    <>
        <Header/>
        <div className='adimOverviewContainer'>
             <div className='sileBar'>
                    <BlogSileBar/>
            </div>
            <OverViewContent/>
        </div>
        <Footer/>
        </>
  )
}

export default AdimOverView