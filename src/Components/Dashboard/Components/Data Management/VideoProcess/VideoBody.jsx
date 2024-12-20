// import React from 'react'
import '../../Data Management/VideoProcess/VideoBody.css'
import Top from './TopVideo/Top'
import Table_Waste from './TableVideo/Table_Video'

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