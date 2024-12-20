// import React from 'react'
import '../../DataManagement/Model/ModelBody.css'
import Top from './Top/Top'
import Table_Waste from './TableModel/Table_Model'

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