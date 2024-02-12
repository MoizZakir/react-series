import React from 'react'
import { Packaging } from '../Packaging'
import { BottomButton } from '../BottomButton'

export const Items = () => {
  return (
    <div style={{display:"flex",flexDirection:'column', alignItems:"center", height:"60vh", backgroundColor:'#4c3423'}}>
      <Packaging/>
      <BottomButton/>
    </div>
  )
}
