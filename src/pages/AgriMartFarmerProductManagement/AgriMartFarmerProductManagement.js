import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
// import './AgriMartFarmerProductManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AgriMartFarmerProductManagement() {
    return (<div>
        <div>
            <AgriMartFarmerNavBar />

        </div>

        <h2 class="txt-header">Product Management</h2>
        <div class="button-style">
            <Link to="/addproduct">
                <Button variant="success" size="sm">
                    Add New Product
                </Button>
            </Link>
        </div>

        <div class="table-style">

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Carrot</td>
                        <td>200 LKR</td>
                        <td>1 Kg</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mango</td>
                        <td>400 LKR</td>
                        <td>1 Kg</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Apple</td>
                        <td>150 LKR</td>
                        <td>1 Kg</td>
                    </tr>
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