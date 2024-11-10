// import React from 'react'
import '../Body Section/body.css'
import Top from '../Body Section/Top Section/Top'
import Listing from '../Body Section/Listing Section/Listing'
import Activity from '../Body Section/Activity Section/Activity'

function Body() {
  return (
    <div className='mainContent'>
      <Top />

      <div className="bottom flex">
        <Listing/>
        <Activity/>
      </div>
    </div>
  )
}

export default Body