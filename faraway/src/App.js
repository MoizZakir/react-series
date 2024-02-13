import logo from './logo.svg';
// import './App.css';
import{ Header} from './components/header/Header'
import{ Footer} from './components/footer/Footer'
import{ Form} from './components/form/Form'
import{ Items }from './components/Items/Items'
import { useState } from 'react';

function App() {
  const [data,setData]=useState([{packed:false,name:'noneni',quantity:2},{packed:false,name:'',quantity:2},{packed:true,name:'tofee',quantity:2}])
  return (
    <>
    <Header/>
    <Form mydata={data} setdata={setData}/>
    <Items myData={data} setValue={setData}/>
    <Footer />
    
    
    </>
  );
}

export default App;
