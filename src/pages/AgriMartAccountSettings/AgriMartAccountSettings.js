import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
 import './AgriMartAccountSettings.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
function AgriMartAccountSettings() {
    return (
        <div>
            <div>
                <AgriMartFarmerNavBar />

            </div>

            <div >
                <h2  class="txt-header">Account Settings</h2>
            </div>

            <div>
                <AgriMartFooter />

            </div>

        </div>

    );
}

export default AgriMartAccountSettings;