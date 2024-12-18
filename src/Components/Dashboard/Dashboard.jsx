import '../Dashboard/Dashboard.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
import BodyStream from '../Dashboard/Components/LiveStream Section/BodyStream'
import BodyVideo from '../Dashboard/Components/Video Section/BodyVideo'
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
          <Route path="waste-table" element={<BodyStream />} />
        </Routes>
    </div>
   </div>
  )
}

export default Dashboard