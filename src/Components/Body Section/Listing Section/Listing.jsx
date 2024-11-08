// import React from 'react'
import './listing.css'

import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import img from "../../../Assets/img1.png";
import img1 from "../../../Assets/img3.png";
import img2 from "../../../Assets/img6.png";
import img3 from "../../../Assets/img8.png";
import img5 from "../../../Assets/user1.jpg";
import img6 from "../../../Assets/user2.jpg";

function Listing() {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img1} alt="Image Name" />
          <h3>Coffee Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img2} alt="Image Name" />
          <h3>Button Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img3} alt="Image Name" />
          <h3>Spider Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img5} alt="User Image" />
              <img src={img5} alt="User Image" />
              <img src={img5} alt="User Image" />
              <img src={img5} alt="User Image" />
            </div>

            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img6} alt="User Image" />
              <img src={img6} alt="User Image" />
              <img src={img6} alt="User Image" />
              <img src={img6} alt="User Image" />
            </div>

            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className='date'>31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing