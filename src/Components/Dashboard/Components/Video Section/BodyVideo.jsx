// import React from 'react'
// import { Button } from 'antd'
import VideoStream from '../../Components/Video Section/VideoStream/VideoStream'
import '../../Components/Video Section/BodyVideo.css'

function BodyVideo() {
  return (
    <div className='mainContent'>
        <VideoStream/>
      {/* <div className="bottom flex gap-2 w-full justify-center items-center">
       <Button type='primary'>Test 1</Button>  flex flex-col gap-3 w-full h-full items-center justify-center
       <Button type='default'>Test 2</Button>
      </div> */}
    </div>
  )
}

export default BodyVideo