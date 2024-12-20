// import React from 'react'
import '../../DataManagement/DetailsWastesProcess/DetailsBody.css'
import Top from './TopDetails/Top'
import Table_Waste from './TableDetails/Table_Details'

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