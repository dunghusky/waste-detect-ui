import '../Dashboard/Dashboard.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
import BodyStream from '../Dashboard/Components/LiveStream Section/BodyStream'
import BodyVideo from '../Dashboard/Components/Video Section/BodyVideo'
import WasteBody from '../Dashboard/Components/Data Management/Waste/WasteBody'  
import WasteCategoryBody from '../Dashboard/Components/Data Management/WasteCategory/WasteCategoryBody'  
import ModelBody from '../Dashboard/Components/Data Management/Model/ModelBody'
import CameraBody from '../Dashboard/Components/Data Management/Camera/CameraBody'
import VideoBody from '../Dashboard/Components/Data Management/VideoProcess/VideoBody'
import DetailsBody from '../Dashboard/Components/Data Management/DetailsWastesProcess/DetailsBody'
import { Routes, Route } from 'react-router-dom';

function Dashboard() {
  return (
   <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
     <div className='container-dashboard'>
       <Sidebar/>
        <Routes>
          <Route path="/" element={<Body />} /> {/* Mặc định là Dashboard */}
          <Route path="realtime" element={<BodyStream />} />
          <Route path="video" element={<BodyVideo />} />
          <Route path="waste-table" element={<WasteBody />} />
          <Route path="waste-category-table" element={<WasteCategoryBody />} />
          <Route path="model-table" element={<ModelBody />} />
          <Route path="camera" element={<CameraBody />} />
          <Route path="process-video" element={<VideoBody />} />
          <Route path="details-process-waste" element={<DetailsBody />} />
        </Routes>
    </div>
   </div>
  )
}

export default Dashboard