import React, { useEffect, useState }  from 'react';
import img1 from './images/logo.jpeg';
import {  FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message.js';
import db from './firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })

  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');

  }
  return (
    <div className="App">
      <img src={img1} width= "125" height="110" />
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message....</InputLabel>
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
           
           <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon/>
           </IconButton>

        </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message ={message} />
        ))
      }
      </FlipMove>
      
    </div>
  );
}

export default App;
