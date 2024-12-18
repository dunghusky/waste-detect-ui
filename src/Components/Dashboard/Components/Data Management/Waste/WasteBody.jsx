// import React from 'react'
import '../../Data Management/Waste/WasteBody.css'
import Top from '../../Data Management/Waste/Top Waste/Top'
import Table_Waste from '../../Data Management/Waste/Table Waste/Table_Waste'

function WasteBody() {
  return (
    <div className='mainContent'>
      <Top />

      <div className="bottom flex">
        <Table_Waste/>
      </div>
    </div>
  )
}

export default WasteBody