import {useState} from 'react'
import '../../Components/Login/Login.css'
// import '../../App.css'

import { Link, useNavigate } from 'react-router-dom'
// import Axios from 'axios'
import {loginAPI} from "../../Services/userServices"
import { message } from 'antd';

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
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await loginAPI(loginUserName, loginPassword);
      console.log("API response:", res);

      if (res.data.status === 200) {
        message.success("Đăng nhập thành công!");
       // Đợi 2 giây rồi chuyển hướng đến Dashboard
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        message.error(res.data.message);
      }
    } catch (e) {
      console.log("Login error:", e);
      message.error("Don't login now!");
    }
  };

  return (
    <div className='loginPage flex items-center justify-center'>
    <div className="container-login flex">

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

          <button type='button' className='btn flex' onClick={loginUser}>
            <span>Đăng nhập</span>
            <AiOutlineSwapRight className='icon'/>
          </button>

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