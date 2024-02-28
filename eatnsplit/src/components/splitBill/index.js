import React, { useState } from 'react'
import './bill.css' 

export const SplitBill = ({billUi,userIndex,user,setUser}) => {
    let data=[...user]
    const [billValue,setBillvalue]=useState()
    const [myExpense,setMyExpense]=useState()
    const [freindExpense,setFreindExpense]=useState()
    const [whoPay,setWhoPay]=useState()
    console.log(billValue)
    // const [whoPay,setWhoPay]=useState()
    function splitHandler(){
        console.log(myExpense);
        console.log(freindExpense);
        let splitUser=data[userIndex];
        let count=(billValue*1)/2
        if(whoPay!='You'){
            splitUser.amount=Math.abs(count-(myExpense*1))
        }
        else{
            splitUser.amount=-(count-(freindExpense*1))
        }
        setUser(data)
        console.log(data);
    }
  return (
      <div style={{display:'flex',backgroundColor:'#fcf2e0', color:'black', flexDirection:'column',alignItems:'center', justifyContent:'center',  borderRadius:"5%", padding:'10px 0px' ,width:"500px", height:"350px", marginLeft:'50px'}}>
        
        
        <h4 style={{marginBottom:"10px"}}>Split a bill with  {data[userIndex].name}</h4>
        <div style={{display:'flex' ,flexDirection:'column', gap:"30px" ,marginTop:"10px", width:"50%"}}>
            <div style={{display:'flex', gap:'20px'}}>
                <p>BillValue:</p>< input style={{border:'none'}} onChange={(e)=>setBillvalue(e.target.value)} type='number' />
 
            </div>
            <div style={{display:'flex', gap:'20px',  width:"70%"}}>
                <p>Your Expense:</p><input style={{border:'none'}} onChange={(e)=>setMyExpense(e.target.value)} type='number' />

            </div>
            <div style={{display:'flex', gap:'20px' ,  width:"70%"}}>
                <p>{data[userIndex].name} Expense:</p><input  style={{border:'none'}} onChange={(e)=>setFreindExpense(e.target.value)} type='number' />

            </div>
            <div style={{display:'flex', gap:'20px' ,  width:"90%", }}>
                <p>Who is paying the Bill:</p><select style={{padding:"5px 15px" ,border:'none'}} onChange={(e)=>setWhoPay(e.target.value)}>
                    <option>You</option>
                    <option>{data[userIndex].name}</option>
                </select>

            </div>
            
        </div>
<button style={{marginTop:"10px", marginLeft:"100px", padding:'8px 16px' ,backgroundColor:'orange', border:'none',borderRadius:'10px'}} onClick={()=>splitHandler()}>Split bill</button>

    </div>
  )
}
