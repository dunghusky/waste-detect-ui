import '../Listing Section/listing.css'
import { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
// import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import {fetchWasteRowsCategory} from '../../DataManagement/WasteCategory/TableWasteCategory/DataTWSource';
// import {fetchWasteRows} from '../../DataManagement/Waste/TableWaste/DataTWSource';
import { useNavigate } from 'react-router-dom';

const Listing = () => {
  // const [wasteData, setWasteData] = useState([]);
  const [wasteDataCategory, setWasteDataCategory] = useState([]);
    const navigate = useNavigate();
    // Lấy dữ liệu từ API
    useEffect(() => {
      const getWasteCategoryData = async () => {
        const data = await fetchWasteRowsCategory();
        setWasteDataCategory(data);
      };
      getWasteCategoryData();
    }, []);
  
    // // Lấy dữ liệu từ API
    // useEffect(() => {
    //   const getWasteData = async () => {
    //     const data = await fetchWasteRows();
    //     setWasteData(data);
    //   };
    //   getWasteData();
    // }, []);

    const handleSeeAll = () => {
      navigate('/dashboard/waste-table'); // Chuyển hướng đến đường dẫn
    };
    
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>Danh mục rác thải</h1>
        <button className="btn flex" type='button' onClick={handleSeeAll}>
          Xem thêm <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        {wasteDataCategory.map((item) => (
          <div key={item.id_category} className="singleItem">
            <AiOutlineHeart className='icon'/>
            <img src={item.img} alt="Image Name" />
            <h3>{item.category_name}</h3>
          </div>
        ))}
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Xử lý</h3>
            <button className="btn flex">
              Xem thêm <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
              <div className="users">
                <img src="https://imgcdn.thitruongsi.com/tts/rs:fill:600:0:1:1/g:sm/plain/file://product/2024/04/27/53277990-0477-11ef-9e85-8f86fd0b5724.jpg" alt="User Image" />
                <img src="https://dichvumoitruong.vn/upload/images/thuc-trang-rac-thai-thuy-dang-bao-dong.png.jpg" alt="User Image" />
                <img src="https://s.alicdn.com/@sc04/kf/H55cdf82ad19749a999005b03b3a7603bs.jpg_720x720q50.jpg" alt="User Image" />
              </div>
              <div className="cardText">
                <span>
                  119 số lượng đã xử lý <br />
                  <small>
                    3 loại <span className='date'>7 ngày trước</span>
                  </small>
                </span>
              </div>
            </div>

        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Top Xử lý</h3>
            <button className="btn flex">
              Xem thêm <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src="https://product.hstatic.net/1000410088/product/upload_0f9a4d3c72c243c5a479ec8656783f0b.jpg" alt="User Image" />
              <img src="https://www.moby.com.vn/data/bt1/sua-tuoi-tiet-trung-dutch-lady-co-duong-hop-giay-1-lit-1630561432.jpg" alt="User Image" />
              <img src="https://sonca.vn/wp-content/uploads/2019/12/Ly-nhua-day-500ml-plastic-glass_2-e1632299649823.jpg" alt="User Image" />
              <img src="https://printern.net/wp-content/uploads/2019/12/in-t%C3%BAi-nilong.jpg" alt="User Image" />
            </div>

            <div className="cardText">
              <span>
                33 số lượng đã xử lý <br />
                <small>
                  4 loại <span className='date'>5 ngày trước</span>
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