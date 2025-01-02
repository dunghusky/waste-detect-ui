// import React from 'react'
import '../SideBar Section/sidebar.css'

import logo from '../../../Login/Assets/logo.png'
import { Link, useLocation  } from 'react-router-dom';

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { GiNuclearWaste } from "react-icons/gi";
import { BsClipboardData } from "react-icons/bs";
import { MdOutlineCameraswitch } from "react-icons/md";
import { RiFileVideoLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const handleLogOut = () => {
    navigate('/'); // Chuyển hướng đến đường dẫn
  };

  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>RevoWaste.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>

        <ul className="menuLists grid">
          <li className={`listItem ${isActive('/dashboard') ? 'active' : ''}`}>
            <Link to="/dashboard" className='menuLink flex'>
                <IoMdSpeedometer className='icon'/>
                <span className="smallTex">
                  Dashboard
                </span>
            </Link>
          </li>

          <li className={`listItem ${isActive('/dashboard/realtime') ? 'active' : ''}`}>
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

          <li className={`listItem ${isActive('/dashboard/waste-category-table') ? 'active' : ''}`}>
            <Link to="/dashboard/waste-category-table" className='menuLink flex'>
                <FaRecycle className='icon'/>
                <span className="smallTex">
                  Phân loại rác
                </span>
            </Link>
          </li>

          <li className={`listItem ${isActive('/dashboard/waste-table') ? 'active' : ''}`}>
            <Link to="/dashboard/waste-table" className='menuLink flex'>
                <GiNuclearWaste className='icon'/>
                <span className="smallTex">
                  Rác thải
                </span>
            </Link>
          </li>

          <li className={`listItem ${isActive('/dashboard/model-table') ? 'active' : ''}`}>
            <Link to="/dashboard/model-table" className='menuLink flex'>
                <BsClipboardData  className='icon'/>
                <span className="smallTex">
                  Mô hình
                </span>
            </Link>
          </li>

          <li className={`listItem ${isActive('/dashboard/camera') ? 'active' : ''}`}>
            <Link to="/dashboard/camera" className='menuLink flex'>
                <MdOutlineCameraswitch   className='icon'/>
                <span className="smallTex">
                  Camera
                </span>
            </Link>
          </li>

          <li className={`listItem ${isActive('/dashboard/process-video') ? 'active' : ''}`}>
            <Link to="/dashboard/process-video" className='menuLink flex'>
                <RiFileVideoLine  className='icon'/>
                <span className="smallTex">
                  Quản lý video
                </span>
            </Link>
          </li>

          <li className={`listItem ${isActive('/dashboard/details-process-waste') ? 'active' : ''}`}>
            <Link to="/dashboard/details-process-waste" className='menuLink flex'>
                <VscServerProcess ess  className='icon'/>
                <span className="smallTex">
                  Quản lý xử lý rác
                </span>
            </Link>
          </li>

        </ul>
      </div>
      
      <div className='logoutDiv'>
        <button type='button' className='btn flex' onClick={handleLogOut}>
          <BsArrowLeftShort className='icon'/>
          <span>Đăng xuất</span>
        </button>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className='icon'/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Hỗ Trợ Quản Trị</h3>
          <p>Cần hỗ trợ khi quản lý hệ thống? Liên hệ để được trợ giúp chi tiết.</p>

          <button className='btn'>Truy cập hỗ trợ quản trị</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar