import React, { useState } from 'react'

export const BottomButton = ({data,setSome}) => {
  function moiz(e){
    let nowData=[...data];
    //inputSorted
    const inputSorted =[...nowData].sort((a,b)=>{return a.quantity-b.quantity});
   //description sorted
    const descriptionSort=[...nowData].sort((a,b)=>{
      return a.name.localeCompare(b.name);
    });
    //packedSorting
    const byPacked=[...nowData].sort((a, b) => a.packed === b.packed ? 0 : (a.packed ? -1 : 1));
    (e.target.value=='Sort by input')? setSome(inputSorted):(e.target.value=="By description")? setSome(descriptionSort):(e.target.value=="By pac")?setSome(byPacked):console.log(true);
  }
  return (
    <div>


<select style={{backgroundColor:'#d7c294', padding:"5px 14px", borderRadius:"20px"}} name="cars" id="cars" onChange={moiz}>
  <option value="Sort by input">Sort by input</option>
  <option value="By description" >By description</option>
  <option value="By pac">By pack</option>
  
</select>
        <button style={{backgroundColor:'#d7c294', padding:"6.4px 14px", borderRadius:"20px"}} onClick={()=>{setSome([])}}>ClearList</button>
    </div>
  )
}
