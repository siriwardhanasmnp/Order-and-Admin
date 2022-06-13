import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import { Form, Row, Col, Button, Alert} from "react-bootstrap";
import { useState } from "react";

function AgriMartAddNewProduct() {
    const [productTitle, setProductTitle] = useState("");
    const [category, setcategory] = useState("");
    const [description, setdescription] = useState("");
    const [quantity, setquantity] = useState("");
    const [price, setprice] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('product', productTitle, category, description, quantity, price);
            // console.log('setValues',setProductTitle,setcategory,setdescription,setquantity,setprice);
            let res = await fetch("http://localhost:8080/products", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({

                    productTitle: productTitle,
                    category: category,
                    description: description,
                    quantity: quantity,
                    price: price
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setProductTitle("");
                setcategory("");
                setdescription("");
                setquantity("");
                setprice("");
                setMessage("Product created successfully");

            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div>
                <AgriMartFarmerNavBar />

            </div>

            <div>
                <h2 class="txt-header" >Add New Product</h2>
                <div class="form-style">

                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Product Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} placeholder=" Enter Product Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Category
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" value={category} onChange={(e) => setcategory(e.target.value)} placeholder="Enter Product Category" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Product Description
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Enter Product Description" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Quantity
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" value={quantity} onChange={(e) => setquantity(e.target.value)} placeholder="Enter Quantity" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Price
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" value={price} onChange={(e) => setprice(e.target.value)} placeholder="Enter Price" />
                            </Col>
                        </Form.Group>

                        {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Add Images
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="file"/>
                            </Col>
                        </Form.Group> */}


                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Group>
                        <Alert variant="warning">
                            <Alert.Heading>
                                {message}
                            </Alert.Heading>
                        

                        </Alert>

                        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
                    </Form>
                </div>

            </div>
            <div>
                <AgriMartFooter />

            </div>

        </div>
    );
}

export default AgriMartAddNewProduct;