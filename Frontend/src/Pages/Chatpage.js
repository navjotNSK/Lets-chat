import React, { useEffect } from 'react';
import axios from 'axios';


function Chatpage() {

  const fetchChats = async () =>{
 const data = await axios.get("/api/chat");
 console.log(data);

  }

  useEffect(() => {
    fetchChats();
  }, [])
  
    

  return (
    <div className="App">
      <div>Chatpage</div>
    </div>
  );
}
export default Chatpage;