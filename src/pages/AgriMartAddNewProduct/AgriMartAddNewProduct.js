import React from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
// import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import { Button, Form, Input, InputNumber, Select, Space } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';

function AgriMartAddNewProduct() {
    // const [productTitle, setProductTitle] = useState("");
    // const [category, setcategory] = useState("");
    // const [description, setdescription] = useState("");
    // const [quantity, setquantity] = useState("");
    // const [price, setprice] = useState("");
    // const [message, setMessage] = useState("");



    let handleSubmit = (product) => {
        console.log(product);
        return;
        try {
            // const product = {
            //     productTitle: productTitle,
            //     category: category,
            //     description: description,
            //     quantity: quantity,
            //     price: price
            // };


            axios({
                method: 'post',
                url: 'http://localhost:8080/products',
                data: product
            })
                .then(res => {
                    console.log('result', res);
                    console.log('data', res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        catch (err) {
            console.log(err);
        }
    };
    const requiredValidation = [{ required: true, message: 'Required' }]
    return (
        <div>
            <div>
                <AgriMartFarmerNavBar />

            </div>

            <div>
                <h2 class="txt-header" >Add New Product</h2>
                <div class="form-style">
                    <Form onFinish={handleSubmit} layout="vertical" labelCol={{ flex: '110px' }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}>
                        <FormItem label="Product Title" name="productTitle" required rules={requiredValidation}>
                            <Input />
                        </FormItem>
                        <FormItem label="Category" name="category" required rules={requiredValidation}>
                            <Select className="w-100">
                                <option value={"vegitable"}>Vegetables</option>
                                <option value={"fruits"}>Fruits</option>
                            </Select>
                        </FormItem>
                        <FormItem label="Product Description" name="description" required rules={requiredValidation}>
                            <TextArea />
                        </FormItem>
                        <FormItem label="Quantity" name="quantity" required rules={requiredValidation}>
                            <InputNumber className="w-100" />
                        </FormItem>
                        <FormItem label="Price" name="price" required>
                            <InputNumber className="w-100" />
                        </FormItem>
                        <Space>
                        <Button htmlType="submit" type="primary">Save</Button>
                        <Button htmlType="reset" >Reset</Button>
                        </Space>
                        
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