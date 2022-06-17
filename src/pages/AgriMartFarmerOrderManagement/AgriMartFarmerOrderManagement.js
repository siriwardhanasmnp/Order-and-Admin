import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import './AgriMartFarmerOrderManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;


function AgriMartFarmerOrderManagement() {
    return (
        <div>
            <div>
                <AgriMartFarmerNavBar />

            </div>
            <div>

                <h2 class="txt-header">Orders Management</h2>
            </div>
            <div>
            const App = () =&gt; (
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="Pending Orders" key="1">
                            <p>Content of pending Orders</p>
                        </TabPane>
                        <TabPane tab="Ready to Ship" key="2">
                            <p>Content of RTS</p>
                            
                        </TabPane>
                        <TabPane tab="Shipped" key="3">
                            <p>Shipped Orders</p>
                            
                        </TabPane>
                        <TabPane tab="Delivered" key="4">
                            <p>Shipped Orders</p>
                            
                        </TabPane>
                    </Tabs>
                </div>
            </div>

            <div>
                <AgriMartFooter />

            </div>

        </div>

    );
}

export default AgriMartFarmerOrderManagement;