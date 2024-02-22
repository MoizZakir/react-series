import logo from './logo.svg';
import './App.css';
import { TopBar } from './components/Topbar';
import { MovieList } from './components/body/leftdiv';
import { WatchMovie } from './components/body/rightdiv';
import { useEffect, useState } from 'react';

function  App() {
  const [search,setSearch]=useState('')
  const [data,setData]=useState([])
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
     <TopBar setsearch={setSearch}/>
     <div style={{display:'flex',width:'100%'}}>
     <MovieList mydata={data}/>
     <WatchMovie/></div>
    </div>
  );
}

export default App;
