import React from 'react'

export const Footer = ({myData}) => {
 let visibleData=[...myData]
 let packedItems=visibleData.filter((e)=>{
  return e.packed==false
 })
  return (
    <div style={{padding:"10px 0", display:'flex', justifyContent:"center", backgroundColor:'#67c1a3'}}>
      <p>You have {`${visibleData.length}`} items  on your list and you have packed  {`${((visibleData.length-packedItems.length)/visibleData.length)*100}`}%</p>
      </div>
  )
}
