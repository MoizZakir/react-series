import React, { useState } from 'react'
import './bill.css' 

export const SplitBill = ({billUi,userIndex,user,setUser}) => {
    let data=[...user]
    
    const [myExpense,setMyExpense]=useState()
    const [freindExpense,setFreindExpense]=useState()
    const [whoPay,setWhoPay]=useState()
    // const [whoPay,setWhoPay]=useState()
    function splitHandler(){
        console.log(myExpense);
        console.log(freindExpense);
        let splitUser=data[userIndex];
        let count=myExpense-freindExpense
        if(whoPay!='You'){
            splitUser.amount=myExpense*1
        }
        else{
            splitUser.amount= -freindExpense*1
        }
        setUser(data)
        console.log(data);
    }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center', borderLeft:"1px solid purple", borderRadius:"50%", padding:'10px 10px', boxShadow:'1px 1px 20px 1px' ,width:"600px", height:"350px"}}>
        
        <h4>Split a bill with  {data[userIndex].name}</h4>
        <div style={{display:'flex' ,flexDirection:'column', gap:"30px" ,marginTop:"10px", width:"50%"}}>
            <div style={{display:'flex', gap:'20px'}}>
                <p>BillValue:</p><input type='text' />

            </div>
            <div style={{display:'flex', gap:'20px',  width:"70%"}}>
                <p>Your Expense:</p><input onChange={(e)=>setMyExpense(e.target.value)} type='number' />

            </div>
            <div style={{display:'flex', gap:'20px' ,  width:"70%"}}>
                <p>{data[userIndex].name} Expense:</p><input onChange={(e)=>setFreindExpense(e.target.value)} type='number' />

            </div>
            <div style={{display:'flex', gap:'20px' ,  width:"90%", }}>
                <p>Who is paying the Bill:</p><select style={{padding:"5px 15px"}} onChange={(e)=>setWhoPay(e.target.value)}>
                    <option>You</option>
                    <option>{data[userIndex].name}</option>
                </select>

            </div>
            
        </div>
<button style={{marginTop:"10px", marginLeft:"70px", padding:'8px 16px' ,backgroundColor:'lightblue', border:'none',borderRadius:'10px'}} onClick={()=>splitHandler()}>Split bill</button>

    </div>
  )
}
