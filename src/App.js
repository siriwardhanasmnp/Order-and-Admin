import React from "react";
import "./App.css" ;
import Register from "./Components/Register";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App(){
  return (
                 
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/sign" element={<Register/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/sign" element={<Login/>}/>
      </Routes>
    </Router>
    
      );
}
 

export default App;



