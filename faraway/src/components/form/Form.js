import React from 'react'

export const Form = () => {
  return (
    <div style={{padding:"15px 0", display:"flex", justifyContent:"center", alignItems:"center", gap:"4px", backgroundColor:'#df6b1b'}}>
      <p>what do you need for your trip ? </p>
      <input type='number'style={{width:"30px",}} placeholder='1' />
      <input type='text' placeholder='items..'/>
      <button>Add</button>
    </div>
  )
}
