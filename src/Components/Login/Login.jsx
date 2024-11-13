import {useState} from 'react'
import './Login.css'
import '../../App.css'

import { Link } from 'react-router-dom'
import Axios from 'axios'

// import { loginAPI } from '../../Services/userServices';

import video from '../Login/Assets/video.mp4'
import logo from '../Login/Assets/logo.png'

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  //Usetate
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  //Onclick
  const loginUser = (e) => {

    e.preventDefault();


    Axios.post("http://127.0.0.1:8000/api/v1/user/login", {
      user_name: loginUserName,
      password: loginPassword,
    }).then((response) => {
      console.log(response)
    }
    )
  }


  return (
    <div className='loginPage flex'>
    <div className="container flex">

      <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>

        <div className="textDiv">
          <h2 className='title'>Rác Được Phân Đúng Loại, Trái Đất Thêm Xanh Tươi</h2>
          <p>Chung Tay Giữ Môi Trường Xanh!</p>
        </div>

        <div className="footerDiv flex">
          <span className="text">Bạn chưa đã có tài khoản?</span>
          <Link to={'/register'}>
            <button className="btn">Đăng ký</button>
          </Link>
        </div>
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo Image" />
          <h3>RevoWaste</h3>
        </div>

        <form action="" className="form grid">
          {/* <span className='showMessage'>Login status will go here</span> */}

          <div className="inputDiv">
            <label htmlFor="username">Tên đăng nhập</label>
            <div className="input flex">
              <FaUserShield className='icon'/>
              <input type="text" id='username' placeholder='Enter Username'
              onChange={(event) => {
                setLoginUserName(event.target.value);
              }}
              />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">Mật khẩu</label>
            <div className="input flex">
              <BsFillShieldLockFill className='icon'/>
              <input type="password" id='password' placeholder='Enter Password'
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              />
            </div>
          </div>

          <button type='submit' className='btn flex' onClick={loginUser}>
            <span>Đăng nhập</span>
            <AiOutlineSwapRight className='icon'/>
          </button>

          <a href="/dashboard">Dashboard</a>

          <span className='forgotPassword'>
            Quên mật khẩu? <a href="">Click Here</a>
          </span>

        </form>
      </div>
    </div>
    </div>
  )
}

export default Login