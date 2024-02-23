import React from 'react'

export const TopBar = ({setsearch,setselect}) => {
  return (
    <div style={{backgroundColor:'#5a37d1' ,display:'flex',justifyContent:'center'}} >
        <input placeholder='Search' type='text' onChange={(e)=>{setsearch(e.target.value); setselect()}} style={{padding:'5px 10px',fontSize:'17px'}}/>
    </div>
  )
}
