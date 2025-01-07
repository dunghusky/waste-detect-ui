// import React from 'react'
import { useState, useEffect } from "react";
import '../Activity Section/activity.css'
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import {fetchWasteRows} from '../../DataManagement/Waste/TableWaste/DataTWSource';

// import img from "../../../Assets/user2.jpg";

const Activity = () => {
  const [wasteData, setWasteData] = useState([]);
  const navigate = useNavigate();
  // Lấy dữ liệu từ API
  useEffect(() => {
    const getWasteData = async () => {
      const data = await fetchWasteRows();
      setWasteData(data);
    };
    getWasteData();
  }, []);

  const handleSeeAll = () => {
    navigate('/dashboard/waste-table'); // Chuyển hướng đến đường dẫn
  };

  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Rác thải</h1>
        <button type='button' className="btn flex" onClick={handleSeeAll}>
          Xem thêm
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">
        {wasteData.map((item) => (
          <div key={item.id} className="singleCustomer flex">
            <img src={item.img} alt="Customers Image" />
            <div className="customerDetails">
              <span className='name'>{item.waste_name}</span>
              <small>{item.id_wastes}</small>
            </div>
            <div className="duration">
              {item.category_name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity