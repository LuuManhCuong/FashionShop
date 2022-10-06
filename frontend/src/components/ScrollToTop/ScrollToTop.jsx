import React from 'react'
import {KeyboardDoubleArrowUpOutlined} from '@mui/icons-material'
import { useState } from 'react'

function ScrollToTop() {
    const [showBtn,setShowBtn] = useState(false)
    window.onscroll = function(){
        // console.log(window.scrollY);
        if(window.scrollY > 700){
            setShowBtn(true)
        }else{
            setShowBtn(false)
        }
    }
  return (
    <>
        {
            showBtn && 
            <button className='scroll-to-top' onClick={() => (window.scrollTo({top: 0, behavior: 'smooth'}))}>
                <KeyboardDoubleArrowUpOutlined className='icons'/>
            </button> 
        }
    </>
  )
}

export default ScrollToTop