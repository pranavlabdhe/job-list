import React, { useRef, useState } from 'react'
import './App.css'
import { log } from 'console'
const App:React.FC = () => { 

  const [hideOverlay,setHideOverlay] = useState(true)

  console.log(hideOverlay)
  const showOverlayFun = () => {
    setHideOverlay(false)
  }
  const closeOverlayFun = () => {
    setHideOverlay(true)
  }
  return (
    <>
      
    {hideOverlay ? 
      null
      : 
      <div className='overlay' onClick={closeOverlayFun}></div>
    }
     <div className='parent_body'>
      <h2 className='title'>JOB LIST</h2>
      <input type="text" className='input_field' onClick={showOverlayFun} />
      <p>jhdscghcs</p>
    </div>
    </>
  )
}

export default App
