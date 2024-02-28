import React, { useState } from 'react'
const Freind=({BillUi,setBillUI,userData,indxNum,setUserIndex})=>{
    const [selectFreind,setSelectFreind]=useState(false)

return(
    <div style={{display:'flex', alignItems:'center',gap:'60px', margin:'16px 0'}}>
        {/* {a=indxNum} */}
        <img src={userData.img?userData.img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAMFBMVEXk5ueutLfr7O3n6eqrsbTc3+Cxt7rh4+TV2NqnrrHIzM7Lz9G4vcC/xMbDyMrO0tNHfP24AAAEMUlEQVR4nO2cW5LjIAwAbcTTBnP/2y5+JOvMOAkgLNha+mfy2aWSBQIxw9DpdDqdTqfT6XQ6nU4HATAGSuiAGMLP2jofARDeyXGHj9J5Ba0ag9DLaPh4hhs56aFBY6Zmy19dD2Nu5+aE2SSvXA/hcW4pi2HQl4H9i5HtpAQo91l2C/Gi2vBl+n0enH2taMJ3ipHdUljXVg0skbYBM9eOLyTYhgBX9k2zXX2r2sbm7ROj68UXdKptiG+1+gAqWXatZ9Xqr00PbvB1dWTTE/fwrZO+OamwU0OXZaXCFl5H7wvCZEdX0lcHsNm2YXdGbqvzbdfwUvsmrr6vmIk4G4T8LvUpvMS6GcvvS3hpswGyq9iBY6S+SFvipQJRdHdIGyGGqgsblLWB4erCSLwQA9Z23fbS6Qq0LuXChluBD126XS94vO5IqDvhbQl7itTThUtdT2Xbdf8BXcLcRduS6s4FdCnrLj4ZCOvuUGJVI2ze8w9wnljC9oehbbmlsx0Y4kzk0F0o97sz+lsjvaVA92ojaeeObickaeOOXYY58anTv3WKMyhUbeDUZ2S5FxOHLvXtMKCOICm79sPXIYJLfby7gribIA/uOn2T62voduYnVNSQyG847RLxIPdwhJPfoxy+WUtbtZEGGHLSgXKj+8M3Y2PGK1SFp29y01bTNpDaE1eezQKfkg+VRhnOJGwlTQNzeqAjrwQ5Za/+HlA2JiHMUvcrOzF/mYfdBiDrJ8IDUG78JMzl0sz47gow7d5GmI+uodDuwCCcuchhbswkmgrtAwbaSRnSlO/Zuv6VIbAtum4AG7RfnN1wbvF6aGlG/gIIwVQioNT2u3Hgldo6l+wR1X6eQiLIR96OISGWyesQ6qEZ8ZCc2q+aoQgcmqfFIWC4DNqzVlClRzsBDMRst2rwbVHjUtpFQ7Uvb00Ab7lJ2fAaIyehKlThsCrM7uf7qRg4D0EmHpBmEFLg67bmrfFoF0GWFQBiyVZ9KluaNgiUthk58Bsj59ubCwB//Yguh7CtVHfWNgCdn7HXTDeWCRHV5STBR3+PcPjAPnYM2cL2jr175CO6HN/Rla5qkd1urnDhqxXwd4X2IVzwJSawAmNu33yLvVwKiXBvaHffQtMucNs39oMiLzFB31K+rihw3VZi9jXeFztCUmQEKx6DG/HOeUyJ88XElzQTdhD5i7tVz/XNrw8U9fa3b2b9ZRH/xuAWsta3ArNieWQN8EGBtxG5vjmfW61UWEm/Ikq63isMt6kdJ1S0TZ8nKfDCC4VMi22972wnbbEo8dIAR9KkWY3V95WkVyC028ZL3YS1AvN+vRQJM6j42Wc8fImtvbjp0VJEz8zi36mWIHo6TrUQ3OiXxBVanitiXxKXeN5VgsiVAmpuHU/ETho1UHU34po20YhuZI8pJG+C2CM+1gitzBT8N/wBcX44zAWEsQEAAAAASUVORK5CYII='} style={{width:"50px",height:"50px", borderRadius:'50%'}}/>
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
        setUserName(()=>{''})
setUserImg(()=>{''})

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
