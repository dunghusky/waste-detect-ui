// import React from 'react'
// import { Button } from 'antd'
import Stream from '../../Components/LiveStream Section/Stream/Stream'
import '../../Components/LiveStream Section/BodyStream.css'

function BodyStream() {
  return (
    <div className='mainContent'>
        <Stream/>
      {/* <div className="bottom flex gap-2 w-full justify-center items-center">
       <Button type='primary'>Test 1</Button>  flex flex-col gap-3 w-full h-full items-center justify-center
       <Button type='default'>Test 2</Button>
      </div> */}
    </div>
  )
}

export default BodyStream