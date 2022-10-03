import React from 'react'
import "./action.scss";
import {DeleteForeverOutlined,Edit} from '@mui/icons-material'

function Action() {
  return (
    <div className='action-container'>
       <button ><DeleteForeverOutlined className='delete-btn'/></button>
       <button ><Edit className='edit-btn'/></button>
    
    </div>
  )
}

export default Action