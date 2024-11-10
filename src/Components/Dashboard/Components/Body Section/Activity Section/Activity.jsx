// import React from 'react'
import '../Activity Section/activity.css'
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../../Assets/user2.jpg";

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img} alt="Customers Image" />
          <div className="customerDetails">
            <span className='name'>Thuy Dung</span>
            <small>Oder a new plants</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img} alt="Customers Image" />
          <div className="customerDetails">
            <span className='name'>Thuy Dung</span>
            <small>Oder a new plants</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img} alt="Customers Image" />
          <div className="customerDetails">
            <span className='name'>Thuy Dung</span>
            <small>Oder a new plants</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img} alt="Customers Image" />
          <div className="customerDetails">
            <span className='name'>Thuy Dung</span>
            <small>Oder a new plants</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img} alt="Customers Image" />
          <div className="customerDetails">
            <span className='name'>Thuy Dung</span>
            <small>Oder a new plants</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity