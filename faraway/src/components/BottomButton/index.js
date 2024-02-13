import React, { useState } from 'react'

export const BottomButton = ({data,setSome}) => {
  const [selection,setSelection]=useState('')
  let nowData=[...data]
  nowData=[]
  // console.log(nowData)
if(selection=='Sort by input'){
  // nowData.pop()
  // setSome([])
  console.log(nowData)
  
}
else if(selection=="By description"){console.log(2)}
else if(selection=='By pac'){console.log(3)}

else{}
  // switch(selection){
  //   case"Sort by input":
  //   
  //   break;
  //   case"By description":
  //   console.log(selection)
  //   break;
  //   case"By pac":
  //   console.log(selection)
  //   break;
  //   default:

  // }
    // setData(nowData)
    // console.log(selection)
  
  return (
    <div>


<select name="cars" id="cars" onChange={(e)=>{setSelection(e.target.value)}}>
  <option value="Sort by input">Sort by input</option>
  <option value="By description" >By description</option>
  <option value="By pac">By pack</option>
  
</select>
        <button onClick={()=>{setSome([])}}>ClearList</button>
    </div>
  )
}
