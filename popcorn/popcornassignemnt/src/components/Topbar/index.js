import React from 'react'
import image from'../../download-removebg-preview.png'

export const TopBar = ({setsearch,setselect,mydata}) => {
  return (
    <div style={{backgroundColor:'#5a37d1' ,display:'flex',justifyContent:'center', color:"white"}} >
      <h3 style={{position:'absolute',left:"70px", color:'whitesmoke'}}>PopCorn</h3>
      <img src={image} style={{width:"90px",height:"35px", position:'absolute', left:'2px'}}/>

        <input placeholder='Search' type='text' onChange={(e)=>{setsearch(e.target.value); setselect()}} style={{padding:'5px 10px',fontSize:'17px'}}/>
<p style={{position:'absolute', right:"20px", top:"5px"}}> Top {mydata?.length} results from search</p>
    </div>
  )
}
