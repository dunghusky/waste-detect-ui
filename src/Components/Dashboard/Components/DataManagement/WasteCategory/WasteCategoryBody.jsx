// import React from 'react'
import '../../DataManagement/WasteCategory/WasteCategoryBody.css'
import Top from './TopWasteCategory/Top'
import Table_WasteCategory from './TableWasteCategory/Table_WasteCategory'

function WasteCategoryBody() {
  return (
    <div className='mainContent'>
      <Top />

      <div className="bottom flex">
        <Table_WasteCategory/>
      </div>
    </div>
  )
}

export default WasteCategoryBody