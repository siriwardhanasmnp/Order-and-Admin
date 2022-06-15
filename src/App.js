import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Router, Routes, Route} from "react-router-dom"
import AgriMartAdmin from './Pages/AgriMartAdmin/AgriMartAdmin';
import OrderManagement from "./Pages/AgriMartAdmin/OrderManagement/OrderManagement"
import AgriMartPayment from './Pages/AgriMartPayments/AgriMartPayment';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/ToUserManagementPage" element={<OrderManagement/>}/>



        <div className="App">
          {/* <AgriMartPayment/> */}
          <AgriMartAdmin/>
        </div>
    //   </Routes>
    // </Router>
  );
}

export default App;
