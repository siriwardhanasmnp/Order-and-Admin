import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import './AgriMartFarmerOrderManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
function AgriMartFarmerOrderManagement () {
    return (
        <div>
        <div>
            <AgriMartFarmerNavBar />

        </div>
        <div>
  
              <h2  class="txt-header">Orders Management</h2>
            </div>
        <div>
            <AgriMartFooter/>

        </div>

    </div>

      );
}

export default AgriMartFarmerOrderManagement;