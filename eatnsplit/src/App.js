
import { useState } from 'react';
import './App.css';
import { FriendList } from './components/friendList';
import { SplitBill } from './components/splitBill';

function App() {
  const [freindData,setFreindData]=useState([{name:"moiz",amount:100},{name:"farhan",amount:0},{name:"zain",amount:50},{name:"sharukh",amount:-40}])
  const [spliBillUi,setSpliBillUi]=useState(false)
  const [userIndx,setUserIndx]=useState('')
  return (
   <div style={{display:'flex'}}>
   <div className='leftSide'>
    <FriendList billUi={spliBillUi} setBillUi={setSpliBillUi} user={freindData} setUser={setFreindData} setUserIndex={setUserIndx} />
   </div>
   <div className='rightSide'>
    {spliBillUi &&(<SplitBill billUi={spliBillUi} user={freindData} setUser={setFreindData}  userIndex={userIndx} />)}
   
   </div>
   
   </div>
  );
}

export default App;
