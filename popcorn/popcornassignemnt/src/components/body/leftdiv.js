import React from 'react'
import { List } from './MovieList'


export const MovieList = ({mydata,select}) => {

  return (
    <div style={{width:'35%',backgroundColor:'#24292c', height:"90Vh"  ,color:'white',overflowY:" scroll"}}>
      {
        mydata?.map((e,i)=>(
<List key={i} moviedata={e} index={i} selectMovies={select}/>
        ))
        }
       
      
    </div>
  )
}
