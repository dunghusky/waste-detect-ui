// import React from 'react'
// import { Button } from 'antd'
import Stream from '../LiveStream Section/Stream/Stream'

function BodyStream() {
  return (
    <div className='flex flex-col gap-3 w-full h-full items-center justify-center'>
        <Stream/>
      {/* <div className="bottom flex gap-2 w-full justify-center items-center">
       <Button type='primary'>Test 1</Button>
       <Button type='default'>Test 2</Button>
      </div> */}
    </div>
  )
}

export default BodyStream