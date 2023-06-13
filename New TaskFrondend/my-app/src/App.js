import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Main from "./Main";




function App() {
  return (
    <div className="App">
  

 

   <BrowserRouter>

   {/* <Signup/> */}


   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/main' element={<Main/>}/>
    
   </Routes>


   </BrowserRouter>
   
    </div>
  );
}

export default App;
