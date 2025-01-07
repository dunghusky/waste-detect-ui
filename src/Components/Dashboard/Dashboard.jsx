import '../Dashboard/Dashboard.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
import BodyStream from '../Dashboard/Components/LiveStream Section/BodyStream'
import BodyVideo from '../Dashboard/Components/Video Section/BodyVideo'
import WasteBody from '../Dashboard/Components/DataManagement/Waste/WasteBody'  
import WasteCategoryBody from '../Dashboard/Components/DataManagement/WasteCategory/WasteCategoryBody'  
import ModelBody from '../Dashboard/Components/DataManagement/Model/ModelBody'
import CameraBody from '../Dashboard/Components/DataManagement/Camera/CameraBody'
import VideoBody from '../Dashboard/Components/DataManagement/VideoProcess/VideoBody'
import DetailsBody from '../Dashboard/Components/DataManagement/DetailsWastesProcess/DetailsBody'
import ImageBody from '../Dashboard/Components/Image/ImageStream/ImageStream'
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
          <Route path="image" element={<ImageBody />} />
        </Routes>
    </div>
   </div>
  )
}

export default Dashboard