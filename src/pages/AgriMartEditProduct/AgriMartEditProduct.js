import React from "react";
import AgriMartFarmerNavBar from "../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
// import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  notification,
} from "antd";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";


function AgriMartEditProduct(props) {

    useEffect(() => {
        setProductId(props.id);
        console.log("Id-------", productId);
        // Update the document title using the browser API
        getOneProduct();
      }, []);

  // const [productTitle, setProductTitle] = useState("");
  // const [category, setcategory] = useState("");
  // const [description, setdescription] = useState("");
  // const [quantity, setquantity] = useState("");
  // const [price, setprice] = useState("");
  // const [message, setMessage] = useState("");


   const [productId, setProductId] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  let getOneProduct = (productId) => {
    axios({
      method: "get",
      url: `http://localhost:8080/products/${productId}`,

    })
      .then((res) => {
          console.log('Edit result',res);
          console.log('data----',res.data);
        notification.success({
          message: "Product Added Successfully",
        });
        form.resetFields()
        setIsLoading(false);
      })

      .catch((error) => {
        notification.error({
          message: "Something Went Wrong",
        });
        setIsLoading(false);
      });
  };

  let onUpdate = (id) => {
    axios({
      method: "update",
      url: `http://localhost:8080/products/${id}`,
    })
      .then((res) => {
        
        console.log("updateTODATa-----", res.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const requiredValidation = [{ required: true, message: "This Field is Required" }];

  return (
    <div>
      <div>
        <AgriMartFarmerNavBar />
      </div>

      <div>
        <h2 class="txt-header">Edit Product</h2>
        <div class="form-style">
          <Form 
          form={form}
            onFinish={onUpdate}
            layout="vertical"
            labelCol={{ flex: "110px" }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
          >
            <FormItem
              label="Product Title"
              name="productTitle"

              required
              rules={requiredValidation}
            >
              <Input maxLength={50}/>
            </FormItem>
            <FormItem
              label="Category"
              name="category"
              required
              rules={requiredValidation}
            >
              <Select className="w-100">
                <option value={"vegitable"}>Vegetables</option>
                <option value={"fruits"}>Fruits</option>
              </Select>
            </FormItem>
            <FormItem
              label="Product Description"
              name="description"
              required
              rules={requiredValidation}
            >
              <TextArea />
            </FormItem>
            <FormItem
              label="Quantity"
              name="quantity"
              required
              rules={requiredValidation}
            >
              <InputNumber min="0" className="w-100" />
            </FormItem>
            <FormItem label="Price" name="price" rules={requiredValidation}>
              <InputNumber min="0" className="w-100" />
            </FormItem>
            <Space>
              <Button  loading={isLoading} htmlType="submit" type="primary">
                Submit
              </Button>
              <Link to="/management">
                  <Button ohtmlType="cancel">Discard</Button>
                </Link>

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

export default AgriMartEditProduct;
