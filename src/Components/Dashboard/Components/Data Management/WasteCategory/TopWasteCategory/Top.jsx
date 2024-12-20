// import React from 'react'
import '../../Camera/TopCamera/top.css'

import { BiSearchAlt } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

import img from "../../../../Assets/user1.jpg"

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Pranti.</h1>
          <p>Hello IsraTech, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className='icon'/>
        </div>

        <div className="adminDiv flex">
          <TbMessageDots className='icon'/>
          <IoNotificationsOutline className='icon'/>
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top