import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import './AgriMartFarmerPortal.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
function AgriMartFarmerPortal() {
    return (
        <div>
            <div>
                <AgriMartFarmerNavBar />

            </div>
           
            <div>
                <h2  class="txt-header" >Welcome to Farmer Portal</h2>
            </div>
            <div> <AgriMartFooter/></div>

        </div>
    )

}
export default AgriMartFarmerPortal