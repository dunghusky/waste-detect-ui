// import React from 'react'
import '../Top Section/top.css'

import { BiSearchAlt } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

import img from "../../../Assets/user1.jpg"
import img2 from "../../../Assets/cay_den.png"
import video from "../../../../Login/Assets/video.mp4"


const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Chào mừng bạn đến với RevoWaste.</h1>
          <p>Xin chào Dung, mừng bạn quay trở lại!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Tìm kiếm' />
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

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Phát triển hệ thống nhận diện rác thải thông minh</h1>
          <p>Ứng dụng mô hình học sâu YOLOv8 tích hợp IoT để bảo vệ môi trường</p>

          <div className="buttons flex">
            <button className="btn transparent">Xem thông tin</button>
            <button className="btn transparent">Thống kê</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Xử lý rác</h1>

              <div className="flex">
                <span>
                  Hôm nay <br /> <small>4 lượt</small>
                </span>
                <span>
                  Tháng trước <br /> <small>175 lượt</small>
                </span>
              </div>

              <span className="flex link">
                Xem chi tiết <BsArrowRightShort className='icon'/>
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name" />
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
        </div>
      </div>
    </div>
  )
}

export default Top