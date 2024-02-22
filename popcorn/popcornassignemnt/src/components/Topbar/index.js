import React from 'react'

export const TopBar = ({setsearch}) => {
  return (
    <div style={{backgroundColor:'blueviolet'}}>
        <input placeholder='Search' type='text' onChange={(e)=>setsearch(e.target.value)} style={{padding:'5px 10px',fontSize:'17px'}}/>
    </div>
  )
}
