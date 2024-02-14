import React from 'react'
import { Packaging } from '../Packaging'
import { BottomButton } from '../BottomButton'

export const Items = ({myData,setValue}) => {
  const thisData=[...myData]
  console.log(thisData)
  return (
    <div style={{display:"flex",flexDirection:'column', alignItems:"center", height:"60vh", backgroundColor:'#4c3423'}}>
      <div style={{display:'flex', width:"70%", height:"50vh",  flexWrap:'wrap'}}>
     { thisData.map((e,num)=>(

      <Packaging dataPass={e} number={num} originalData={myData} orginalSetData={setValue}/>
      ))}</div>
      <BottomButton data={myData} setSome={setValue}/>
    </div>
  )
}
