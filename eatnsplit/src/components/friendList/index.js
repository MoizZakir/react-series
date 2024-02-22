import React, { useState } from 'react'
const Freind=({BillUi,setBillUI,userData,indxNum,setUserIndex})=>{
    const [selectFreind,setSelectFreind]=useState(false)

return(
    <div style={{display:'flex', alignItems:'center',gap:'60px', margin:'16px 0'}}>
        {/* {a=indxNum} */}
        <img src='data:image/jpeg;base64,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' style={{width:"50px",height:"50px", borderRadius:'50%'}}/>
        <div style={{width:"30%"}}>
            <p>{userData.name}</p>
            <p style={{color:(userData.amount>0?'red':userData.amount<0?'#25d366':'black')}}>{userData.amount>0? `you owes ${userData.amount} Rupees `:userData.amount==0?`You and ${userData.name} are Even `:`${userData.name +" "+ Math.abs(userData.amount)  } Rupees  owes you`}</p>
        </div>
        <button disabled={!selectFreind && BillUi} style={{padding:'5px 10px', borderRadius:'10px', border:'none', backgroundColor:'orange'}} onClick={()=>{
            setUserIndex(()=>indxNum);
            
            setBillUI(()=>!BillUi);
            setSelectFreind(()=>!selectFreind)
           
            }}>{!selectFreind  ? 'select':'close'}</button>
    </div>
)
}


export const FriendList = ({billUi,setBillUi,user,setUser,setUserIndex}) => {
        let data=[...user]
    const [isVisible,setIsVisible]=useState(false)
    const [userName,setUserName]=useState('')
    const [userImg,setUserImg]=useState('')
    function addUserHandler(){
        const singleUser={
            name:userName,
            img:userImg,
            amount:0,
            
            
        }
        data.push(singleUser)
        setUser(data)

    }
  return (
    <div style={{marginTop:'50px'} }>
        {data.map((e,index)=>( <Freind key={index} BillUi={billUi} setBillUI={setBillUi}setUserIndex={setUserIndex} indxNum={index} userData={e}/>))}
        
        
        <button style={{padding:'9px 20px',margin:'20px 105px', borderRadius:'10px', border:'none' ,color:'white',backgroundColor:'green'}} onClick={()=>setIsVisible(!isVisible)}>{!isVisible ? 'Add Freind' :'close'}</button>
        {isVisible && (
        <div style={{width:"60%", border:'1px solid purple', padding:"20px 10px" ,borderRadius:"9px"}} >
            
            <div style={{display:'flex', gap:'20px', width:'100%', margin:'8px 0'}}>
                <p style={{width:"50%"}}>FriendName:</p><input style={{width:"50%",fontSize:"18px", height:"34px" }} type='text'  onChange={(e)=>{
                    setUserName(e.target.value)
                }}/>
            </div>
            <div style={{display:'flex', gap:'20px' ,width:'100%'}}>
                <p style={{width:"50%"}}>ImageUrl:</p ><input style={{width:"50%",fontSize:"18px" ,height:"34px"}} type='text'onChange={(e)=>{
                    setUserImg(e.target.value)
                }} />
            </div>
            <button  onClick={()=>{addUserHandler()}} style={{padding:'9px 15px',borderRadius:'10px', border:'none', color:'white',backgroundColor:'blue' ,marginTop:"20px" }}>Add</button>
        </div>)}
    </div>
  )
}
