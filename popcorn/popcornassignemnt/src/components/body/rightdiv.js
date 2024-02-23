import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6"

export const WatchMovie = ({mydata,select,setRateNum,rateNum,movieAdd,setMovieAdd}) => {
    const isSelectMovie =mydata[select]?.id
    let movies=[...movieAdd]
    console.log(movies)
    const [singleMovie,setSingleMovie]=useState({})



  //moviedetail Component


    const MoviesDetails=()=>{
      return(
        <div>
          <div style={{display:"flex",color:'whitesmoke', backgroundColor:'#293234' }} >
      <img src={'https://image.tmdb.org/t/p/h100/'+singleMovie?.poster_path} style={{width:"120px"}}/>
          <div style={{display:"flex", marginLeft:'12px',flexDirection:'column',justifyContent:'space-around'}}>
          <h3>{singleMovie?.title}</h3>
          <p> {singleMovie?.release_date}</p>
          <p>{singleMovie.genres?.map((e)=>e.name+',')}</p>
          <p style={{}}>{<FaStar size={20} color='yellow' />}{singleMovie?.vote_average} TMD Rating</p>
          </div>

        </div> 
        
  <div style={{backgroundColor:'#293234', marginTop:'50px'}}>
<div style={{ display:"flex", justifyContent:'center', gap:"20px",alignItems:'center', padding:"20px 0"}}>
  {
  [...Array(10)].map((e,i)=>(

  <Stars index={i}/>

  ))
  
  
  }
  

</div>
<div style={{display:'flex',justifyContent:'center'}}>
  <button style={{padding:"5px 55px", backgroundColor:"#5a37d1" ,color:'white' ,borderRadius:"10px", border:'none'}} onClick={()=>{movies.push(singleMovie); setMovieAdd(movies) }}>Add to List</button>
</div>
  </div> 
<div>
  <p style={{textAlign:'center', padding:'5px 15px', color:'whitesmoke' ,marginTop:'10px'}}>{singleMovie?.overview}</p>
</div>
        </div>

        
      )
    }
console.log(singleMovie)


//WatchedMovies List Componets

const WatchedMoviesList=({data})=>{
  return(
    <div>
      <div style={{width:'75%', cursor:'pointer',display:'flex', borderBottom:'1px solid black', margin:'5px 0', padding:'10px 0'}}>
        <img height={50} width={80} src={'https://image.tmdb.org/t/p/w45/'+data?.poster_path} alt='Lodaing...'/>
        <div><p>{data?.title}</p>
        <p>{data?.rating}</p>
        
   
    </div>
    </div>
      
    </div>


  )
}




///Star components


function Stars({index}){
  console.log(rateNum)
  const [rate,setRate]=useState(false)
  return(
<FaStar size={20} fill= {rateNum<=index?'white':'yellow'} onClick={()=>setRateNum(rateNum==index+1?index-rateNum:index+1)}  />
  )
}

    console.log(isSelectMovie)
    //  console.log(singleMovie)
//useEffect    


    useEffect(()=>{
    async  function apiFetch(){
      const a=(await fetch(`https://api.themoviedb.org/3/movie/${isSelectMovie}?api_key=638301d2eb61261f82117ad5580f6bd4&append_to_response=videos`)).json().then((e)=>setSingleMovie({...e}));
      console.log(await a)}
      apiFetch()
    },[select])


  return (
    
  <div  style={{width:'35%' , height:"200px",backgroundColor:'#24292c', height:"100Vh" ,display:"flex",flexDirection:'column'}}>

{select>=0 ?(
<MoviesDetails/>
        ):
        movies?.map((e,i)=>(<WatchedMoviesList data={e} indx={i}/>))
        } 
        
    
  </div>
      
    )
    }






