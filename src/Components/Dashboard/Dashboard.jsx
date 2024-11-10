import '../Dashboard/Dashboard.css'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'

function Dashboard() {
  return (
    <div className='container'>
       <Sidebar/>
       <Body/>
    </div>
  )
}

export default Dashboard