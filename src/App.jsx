import { useState } from 'react'
import logo from './logo.svg'
import React from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import './App.css'
import { getDatabase,push,ref,set ,onChildAdded} from "firebase/database";

function App() {

  // It stores username that you add 
  const [name, setSetname] = useState('')

  const [chats,setChats] = useState([])
  // It stores all the chats


  // For accessing database 
  const db = getDatabase();


  const chatListRef = ref(db, 'chats');

React.useEffect(()=>{
  onChildAdded(chatListRef, (data) => {
    // const c = [...chats]

    // c.push(data.val())
    setChats(chats=>[...chats,data.val()])
  console.log(data.val())
  }) ;
},[])

const [msg,setMsg] = useState('')

const sendChat = ()=>{
// const msgs = [...chats]
// msgs.push({name,message:msg})
// setChats(msgs)
// setMsg('')

const chatRef = push(chatListRef);
set(chatRef, {
    name,message:msg
});




}

  return (
    <div className="App">
      
{

name ? null :

<div class="input-group input-group-lg w-25 m-auto h-25 mt-25">
<span class="input-group-text" id="inputGroup-sizing-lg">Enter Your Name </span>
  <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type="text" placeholder='Enter Your name to start chating' onBlur={e=>setSetname(e.target.value)}/>
</div>

}

{
  name ? 
<div>
    <h1>User : {name}</h1>
    <div className='chat-container'>
{chats.map(e=>
   <div className={`container ${e.name === name ? "me" : ""}`}>

   <p className='chatbox'>
     <strong>{e.name} </strong>
     <span>{e.message}</span>
   </p>
   </div>
  )}
    </div>
    <div className='btm'>
<Input fullWidth="true" type="text" onInput={e=>setMsg(e.target.value)} placeholder='Enter your message' value={msg}/>
<Button  variant="contained" color="success" onClick={sendChat}>Send</Button>
    </div>
    </div>
    : null
    }
    </div>
  )
}

export default App
