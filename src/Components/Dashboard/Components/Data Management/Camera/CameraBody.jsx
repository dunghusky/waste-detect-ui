// import React from 'react'
import '../../Data Management/Camera/CameraBody.css'
import Top from './TopCamera/Top'
import Table_Waste from './TableCamera/Table_Camera'

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