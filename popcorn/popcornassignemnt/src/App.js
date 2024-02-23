import logo from './logo.svg';
import './App.css';
import { TopBar } from './components/Topbar';
import { MovieList } from './components/body/leftdiv';
import { WatchMovie } from './components/body/rightdiv';
import { useEffect, useState } from 'react';

function  App() {
  const [search,setSearch]=useState('')
  const [rateValue,setRateValue]=useState(0)
  const [data,setData]=useState([])
  const [movieDekhi,setMovieDekhi]=useState([])
  const [watchedMovies,setWatchedMovies]=useState([])
  const [select,setSelect]=useState()
  console.log(select)
  useEffect(()=>{
 async function fetchdata(){
    const a=(await fetch(`https://api.themoviedb.org/3//search/movie?api_key=638301d2eb61261f82117ad5580f6bd4&query=${search}`)).json().then((e)=>setData([...e.results]));
    // console.log(await a)
    
  
  console.log(data)
 }
  fetchdata()
},[search])
   
    
  
 
  // console.log(a)
 
  return (
    <div >
     <TopBar setsearch={setSearch} setselect={setSelect}/>
     <div style={{display:'flex',width:'100%', justifyContent:'center' ,gap:'20px' ,backgroundColor:'#1b2021'} }>
     <MovieList mydata={data} select={setSelect}/>
    <WatchMovie mydata={data} select={select} setRateNum={setRateValue} rateNum={rateValue} movieAdd={movieDekhi} setMovieAdd={setMovieDekhi} /></div>
    </div>
  );
}

export default App;
