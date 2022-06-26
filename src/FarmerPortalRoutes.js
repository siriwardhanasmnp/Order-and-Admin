import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgriMartFarmerProductManagement from "./pages/AgriMartFarmerView/AgriMartFarmerProductManagement/AgriMartFarmerProductManagement";
import AgriMartFarmerOrderManagement from "./pages/AgriMartFarmerView/AgriMartFarmerOrderManagement/AgriMartFarmerOrderManagement";
import AgriMartFarmerManagereview from "./pages/AgriMartFarmerView/AgriMartFarmerManageReview/AgriMartFarmerManagereview";
import AgriMartAccountSettings from "./pages/AgriMartFarmerView/AgriMartAccountSettings/AgriMartAccountSettings";
import AgriMartFinance from "./pages/AgriMartFarmerView/AgriMartFinance/AgriMartFinance";
import AgriMartAddNewProduct from "./pages/AgriMartFarmerView/AgriMartAddNewProduct/AgriMartAddNewProduct";
import AgriMartFarmerPortal from "./pages/AgriMartFarmerView/AgriMartFarmerPortal/AgriMartFarmerPortal";
import AgriMartEditProduct from "./pages/AgriMartFarmerView/AgriMartEditProduct/AgriMartEditProduct";

import "./App.css";
import AgriMartSideBar from "./components/AgriMartSideBar/AgriMartSideBar";

function FarmerPortalRoutes() {
  return (
    <Router>
      <AgriMartSideBar>
        <Routes>
          {/* Agrimart portal redirected to following pages
                                    - AgriMartFarmerProductManagement
                                    - AgriMartOrderManagement
                                    - AgriMartManageReview
                                    - AgriMartFinance
                                    - AgriMartAccountSettings */}
          <Route path="/portal" element={<AgriMartFarmerPortal />} />

          <Route
            path="/management"
            element={<AgriMartFarmerProductManagement />}
          />
          <Route path="/orders" element={<AgriMartFarmerOrderManagement />} />
          <Route path="/reviews" element={<AgriMartFarmerManagereview />} />
          <Route path="/finance" element={<AgriMartFinance />} />
          <Route
            path="/accountsettings"
            element={<AgriMartAccountSettings />}
          />
          <Route path="/addproduct" element={<AgriMartAddNewProduct />} />
          <Route path="/editproduct/:id/" element={<AgriMartEditProduct />} />
        </Routes>
      </AgriMartSideBar>
    </Router>
  );
}

export default FarmerPortalRoutes;
