import React, { useState, useEffect } from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import './AgriMartFarmerOrderManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';

const { TabPane } = Tabs;

function AgriMartFarmerOrderManagement() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        apiCalls();
    });

    let apiCalls = (e) => {
        try {

            axios({
                method: 'get',
                url: 'http://localhost:8080/getproducts'
            })
                .then(res => {
                    console.log('result', res);
                    console.log('data', res.data);
                    setData(res.data);
                    console.log('data-array', data)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        catch (err) {
            console.log(err);
        }
    };

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
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.orderId}</td>
                                                    <td>{item.orderDate}</td>
                                                    <td>{item.orderName}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>
                                                    {/* <td>{item.price}</td> */}

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>
                        </TabPane>
                        <TabPane tab="Ready to Ship" key="2">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.orderId}</td>
                                                    <td>{item.orderDate}</td>
                                                    <td>{item.orderName}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>
                                                    {/* <td>{item.price}</td> */}

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                        <TabPane tab="Shipped" key="3">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.orderId}</td>
                                                    <td>{item.orderDate}</td>
                                                    <td>{item.orderName}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>
                                                    {/* <td>{item.price}</td> */}

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                        <TabPane tab="Delivered" key="4">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.orderId}</td>
                                                    <td>{item.orderDate}</td>
                                                    <td>{item.orderName}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price}</td>
                                                    {/* <td>{item.price}</td> */}

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>

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