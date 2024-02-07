import "./App.css";
import Homepage from "./Pages/Homepage";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { Button } from "@chakra-ui/react";

// function App() {
//   return (
//     <div className="App">
//       <Button colorScheme='blue'>Button</Button>
//       <BrowserRouter>
//       <Route path="/" component={Homepage} exact />
//       <Route path="/chats" component={Chatpage} />
//       </BrowserRouter>
//     </div>
//   );
// }

 function App() {
 
  return (
    
    <div className="App">
    <div>
    <Button colorScheme='blue'>Button</Button>
    </div>
      <Routes>
      <Route path="/home" element={<Homepage/>}  exact />
      <Route path="/chats" element={<Chatpage/>} />
      </Routes>
    </div>
  );
}
export default App;


// App.js (corrected)
// ...

// ...
