import React from 'react'
function List({moviedata}){
    return(
        <div style={{width:'75%',display:'flex', borderBottom:'1px solid black', margin:'10px 0', padding:'5px 0'}}>
        <img height={50} width={80} src={'https://image.tmdb.org/t/p/w45/'+moviedata.poster_path}/>
        <div><p>{moviedata.title}</p>
        <p>{moviedata.release_date}</p>
        <p>{moviedata.vote_average}</p>
   
    </div>
    </div>
    )
}

export const MovieList = ({mydata}) => {
  return (
    <div style={{width:'50%',backgroundColor:'brown', height:"100Vh" }}>
      {
        mydata?.map((e)=>(
<List moviedata={e}/>
        ))
        }
       
      
    </div>
  )
}
