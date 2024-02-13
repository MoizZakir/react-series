import React from 'react'

export const Packaging = ({dataPass,number,originalData,orginalSetData}) => {
    const checkHandler=(isPacked,indx)=>{
        
        const changeabelData=[...originalData]

        changeabelData[indx].packed=!isPacked
        orginalSetData(changeabelData)
        console.log(changeabelData)
        // changeabelData[indx]
    }

  return (
    <div style={{height:"50vh", width:"70%", display:'flex', flexWrap:'wrap', margin:"0px auto", justifyContent:"space-between"}}>
        <div style={{display:'flex',gap:'10px',  alignItems:'center', justifyContent:'center'}}>
            <input type='checkBox' checked={dataPass.packed} onChange={()=>checkHandler(dataPass.packed,number)}/>
            <p style={{textDecoration: dataPass.packed ?'line-through':'none'}}>{`${dataPass.quantity}   ${dataPass.name}`}</p>
            <p>X</p>
        </div>
       
        
        

    </div>
  )
}
