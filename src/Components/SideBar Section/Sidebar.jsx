// import React from 'react'
import './sidebar.css'

import logo from '../../LoginAssets/logo.png'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Planti.</h2>
      </div>
    </div>
  )
}

export default Sidebar