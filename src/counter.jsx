import React, { useState } from 'react'


function counter() {
    const [center, setcounter]=useState(0);
  return (
    <div className='border-2 border-solid w-100 h-50 flex flex-col items-center justify-center p-8 bg-white'>
        <div>{center}</div>
        <button className='w-30 h-10 border-2 border-solid' onClick={()=>setcounter(center+1)}>click to increase</button>
        <button className='w-30 h-10 border-2 border-solid' onClick={()=>setcounter(center-1)}>click to decrease</button>
    </div>
    
  )
}

export default counter