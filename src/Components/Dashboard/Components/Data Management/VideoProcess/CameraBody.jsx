// import React from 'react'
import '../../Data Management/Camera/CameraBody.css'
import Top from './Top Camera/Top'
import Table_Waste from './Table Camera/Table_Waste'

function CameraBody() {
  return (
    <div className='mainContent'>
      <Top />

      <div className="bottom flex">
        <Table_Waste/>
      </div>
    </div>
  )
}

export default CameraBody