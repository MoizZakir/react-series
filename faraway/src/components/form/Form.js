import React, { useState } from 'react'

export const Form = ({mydata,
  setdata}) => {
   let  copyData=[...mydata]
  const [qty,setQty]=useState(1)
  const [text,setText]=useState('Empty')
 
  const addHandler=()=>{
    const singleItem={
      quantity:qty,
      name:text,
      packed:false
    }
    copyData.push(singleItem)
    setdata(copyData)
    setQty(1)
    setText('')
    
  }
  return (
    <div style={{padding:"15px 0", display:"flex", justifyContent:"center", alignItems:"center", gap:"4px", backgroundColor:'#df6b1b'}}>
      <p>what do you need for your trip ? </p>
      <input type='number'style={{width:"30px",padding:'1.5px 20px', borderRadius:"20px", backgroundColor:'#fde7aa', border:'none', fontSize:"19px"}} placeholder='1' onChange={(e)=>{setQty(e.target.value)}} />
      <input style={{borderRadius:"20px", backgroundColor:'#fde7aa', border:'none', fontSize:"19px"}} type='text' placeholder='items..' onChange={(e)=>{setText(e.target.value)}} />
      <button style={{backgroundColor:'#67c1a3' ,padding:'5px 20px', borderRadius:'20px'}} onClick={()=>{
        addHandler()
      }}>Add</button>
    </div>
  )
}
