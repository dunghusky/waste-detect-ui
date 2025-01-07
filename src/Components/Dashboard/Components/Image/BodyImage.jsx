// import React from 'react'
// import { Button } from 'antd'
import ImageStream from '../Image/ImageStream/ImageStream'
import '../../Components/Image/BodyImage.css'

function BodyImage() {
  return (
    <div className='mainContent'>
        <ImageStream/>
      {/* <div className="bottom flex gap-2 w-full justify-center items-center">
       <Button type='primary'>Test 1</Button>  flex flex-col gap-3 w-full h-full items-center justify-center
       <Button type='default'>Test 2</Button>
      </div> */}
    </div>
  )
}

export default BodyImage