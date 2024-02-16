import React from 'react'

export const SplitBill = ({billUi,userIndex,user}) => {
    let data=[...user]
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        
        <h4>Split a bill with  {data[userIndex].name}</h4>
        <div style={{display:'flex' ,flexDirection:'column', gap:"30px" ,marginTop:"10px"}}>
            <div style={{display:'flex', gap:'20px'}}>
                <p>BillValue:</p><input type='text' />

            </div>
            <div style={{display:'flex', gap:'20px'}}>
                <p>Your Expense:</p><input type='text' />

            </div>
            <div style={{display:'flex', gap:'20px'}}>
                <p>{data[userIndex].name} Expense:</p><input type='text' />

            </div>
            <div style={{display:'flex', gap:'20px'}}>
                <p>Who is paying the Bill:</p><select>
                    <option>You</option>
                    <option>{data[userIndex].name}</option>
                </select>

            </div>
            
        </div>
<button>Split bill</button>

    </div>
  )
}
