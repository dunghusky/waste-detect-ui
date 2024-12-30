// import React from 'react'
import '../SideBar Section/sidebar.css'

import logo from '../../../Login/Assets/logo.png'
import { Link } from 'react-router-dom';

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/dashboard" className='menuLink flex'>
                <IoMdSpeedometer className='icon'/>
                <span className="smallTex">
                  Dashboard
                </span>
            </Link>
          </li>

          <li className="listItem">
             <Link to="/dashboard/realtime" className='menuLink flex'>
                <MdDeliveryDining  className='icon'/>
                <span className="smallTex">
                  Livestreams
                </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/dashboard/video" className='menuLink flex'>
                <MdOutlineExplore className='icon'/>
                <span className="smallTex">
                  Explore
                </span>
            </Link>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BsTrophy className='icon'/>
                <span className="smallTex">
                  Products
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <AiOutlinePieChart  className='icon'/>
                <span className="smallTex">
                  Charts
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BiTrendingUp  className='icon'/>
                <span className="smallTex">
                  Trends
                </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          QUẢN LÝ DỮ LIỆU
        </h3>

        <ul className="menuLists grid">

          <li className="listItem">
            <Link to="/dashboard/waste-category-table" className='menuLink flex'>
                <MdOutlinePermContactCalendar className='icon'/>
                <span className="smallTex">
                  Phân loại rác
                </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/dashboard/waste-table" className='menuLink flex'>
                <MdOutlinePermContactCalendar className='icon'/>
                <span className="smallTex">
                  Rác thải
                </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/dashboard/model-table" className='menuLink flex'>
                <BsCreditCard2Front className='icon'/>
                <span className="smallTex">
                  Mô hình
                </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/dashboard/camera" className='menuLink flex'>
                <BsCreditCard2Front className='icon'/>
                <span className="smallTex">
                  Camera
                </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/dashboard/process-video" className='menuLink flex'>
                <BsCreditCard2Front className='icon'/>
                <span className="smallTex">
                  Quản lý video
                </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/dashboard/details-process-waste" className='menuLink flex'>
                <BsCreditCard2Front className='icon'/>
                <span className="smallTex">
                  Quản lý xử lý rác
                </span>
            </Link>
          </li>

        </ul>
      </div>
      
      <div className='logoutDiv'>
        <button type='submit' className='btn flex'>
          <BsArrowLeftShort className='icon'/>
          <span>Log Out</span>
        </button>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className='icon'/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in Planti, please contact us from for more questions.</p>
          
          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar