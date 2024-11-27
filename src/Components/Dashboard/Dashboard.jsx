import '../Dashboard/Dashboard.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
// import Body from '../Dashboard/Components/Body Section/Body'
import BodyStream from '../Dashboard/Components/LiveStream Section/BodyStream'

function Dashboard() {
  return (
    <div className='container'>
       <Sidebar/>
       {/* <Body/> */}
       <BodyStream/>
    </div>
  )
}

export default Dashboard