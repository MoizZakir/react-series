export function List({moviedata,index,selectMovies}){
    return(
        <div onClick={()=>selectMovies(index)} style={{width:'75%', cursor:'pointer',display:'flex', borderBottom:'1px solid black', margin:'5px 0', padding:'10px 0'}}>
        <img height={50} width={80} src={'https://image.tmdb.org/t/p/w45/'+moviedata.poster_path} alt='Lodaing...'/>
        <div><p>{moviedata.title}</p>
        <p>{moviedata.release_date?.slice(0,4)}</p>
        
   
    </div>
    </div>
    )
}