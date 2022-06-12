//import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Pending from './pages/Pending';
import Confirmed from "./pages/Confirmed";
import Customer from "./pages/Customer view/Customer";
import Delivery from "./pages/Delivery Portal/Delivery";

export default function App() {
return (
    <div className='App'>
    
   <Router>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        
          <Route path="/pending" element={<Pending/>} />
          <Route path="/confirmed" element={<Confirmed/>} /> 
          <Route path="/customer" element={<Customer/>} />  
          <Route path="/delivery" element={<Delivery/>} />  
         
        </Routes>
      
    </Router>
    </div>

  );
  }