import React, { useState, useEffect } from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import './AgriMartFarmerProductManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { Button } from 'antd';

function AgriMartFarmerProductManagement() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        apiCalls();
    });

    let apiCalls = (e) => {
        try {

            axios({
                method: 'get',
                url: 'http://localhost:8080/products'
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

    return (<div>
        <div>
            <AgriMartFarmerNavBar />

        </div>

        <h2 class="txt-header">Product Management</h2>
        <div class="button-style">
            <Link to="/addproduct">
                <Button type="primary" colour="green">
                    Add New Product
                </Button>
            </Link>
        </div>

        <div class="table-style">

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Title</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.productId}</td>
                                <td>{item.productTitle}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <Button type="text">Edit</Button>
                                <Button type="primary" danger>Delete</Button>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </div>



        <div>
            <AgriMartFooter />

        </div>

    </div>
    );
};


export default AgriMartFarmerProductManagement;