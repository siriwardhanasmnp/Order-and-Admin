import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Result, Row } from 'antd';
import { Nav } from "react-bootstrap";


function PaymentSuccess() {
  return (
    <>
    <div className="successRow">
      <Result
    status="success"
    title="Successfully Placed Order"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      // <Button type="primary" key="console">
      //   Go Console
      // </Button>,
       
       <Link to="/ToProducts">
       <Button type="buy"> 
       Shop More</Button>
       </Link>
    ]}
  />
  </div>
    </>
  );
}

export default PaymentSuccess;
