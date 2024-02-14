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
    
        <div style={{display:'flex', gap:"10px", width:"20%" }}>
            <input style={{marginTop:"18px", height:"20px"}} type='checkBox' checked={dataPass.packed} onChange={()=>checkHandler(dataPass.packed,number)}/>
            <p style={{color :'#fde7aa',textDecoration: dataPass.packed ?'line-through':'none'}}>{`${dataPass.quantity}   ${dataPass.name}`}</p>
            <p style={{color :'red'}}>X</p>
        
       
        
        

    </div>
  )
}
