import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Chatpage() {

  const[chats , setChats] = useState([]);

  const fetchChats = async () =>{
    const response = await axios.get("/api/chat");
    setChats(response.data);
    console.log(response);
    console.log(response.data);
     };
     
  useEffect(() => {

 
    fetchChats();
  }, []);
  
    

  return (
    <div className="App">
      <div>
        {chats.length > 0 && chats.map((chat) => (
          <div key={chat.id}>{chat.chatName}</div>
        ))}
      </div>
      <div>Chatpage</div>
    </div>
  );
}
export default Chatpage;