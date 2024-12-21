// import React from 'react'
import '../../DataManagement/Waste/WasteBody.css'
import Top from './TopWaste/Top'
import Table_Waste from '../../DataManagement/Waste/TableWaste/Table_Waste'

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