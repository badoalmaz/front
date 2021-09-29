import classes from "./Admin.module.css";
import { Form, Button } from "react-bootstrap";

import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";

const AddPlace = () => {
  const { addProduct, history } = useProducts();

  const handleClick = async (product) => {
    const data = await addProduct(product);
    history.push("/places");
  };

  const [product, setProduct] = useState({
    name: "",
    type: "",
    address: "",
    description: "",
    img: "",
    averageBill: 0,
  });

  const handleInp = (e) => {
    console.log(product);
    console.log(e.target.name);
    if (e.target.name == "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className={classes.form}>
      <Form>
        <Form.Label>Add Place</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            onChange={handleInp}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="type"
            name="type"
            onChange={handleInp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="address"
            name="address"
            onChange={handleInp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="description"
            name="description"
            onChange={handleInp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="image"
            name="img"
            onChange={handleInp}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="number"
            placeholder="average bill"
            name="averagebill"
            onChange={handleInp}
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          onClick={() => handleClick(product)}
          style={{
            color: "wheat",
            borderColor: "wheat",
            backgroundColor: " #4d7186",
            margin: "5px",
          }}
        >
          Save
        </Button>
        <Button
          variant="dark"
          type="submit"
          onClick={() => history.push("/places")}
          style={{
            color: "wheat",
            borderColor: "wheat",
            backgroundColor: " #4d7186",
            margin: "5px",
          }}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default AddPlace;
