import classes from "./Admin.module.css";
import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../contexts/ProductContext";
import { handleInp } from "../../helpers/functions";
import { Link } from "react-router-dom";

const EditPlace = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    type: "",
    address: "",
    description: "",
    img: "",
    averageBill: 0,
  });

  const { getProductDetails, productDetails, history, saveEditedProduct } =
    useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <div className={classes.form}>
      <Form>
        <Form.Label>Edit Place</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            defaultValue={product.name}
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => handleInp(e, product, setProduct)}
            style={{
              // backgroundColor: "wheat",
              color: "#4d7186",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="type"
            name="type"
            defaultValue={product.type}
            onChange={(e) => handleInp(e, product, setProduct)}
            style={{
              // backgroundColor: "wheat",
              color: "#4d7186",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="address"
            name="address"
            defaultValue={product.address}
            onChange={(e) => handleInp(e, product, setProduct)}
            style={{
              // backgroundColor: "wheat",
              color: "#4d7186",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="description"
            name="description"
            defaultValue={product.description}
            onChange={(e) => handleInp(e, product, setProduct)}
            style={{
              // backgroundColor: "wheat",
              color: "#4d7186",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="image"
            name="img"
            defaultValue={product.img}
            onChange={(e) => handleInp(e, product, setProduct)}
            style={{
              // backgroundColor: "wheat",
              color: "#4d7186",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="average bill"
            name="averageBill"
            defaultValue={product.averageBill}
            onChange={(e) => handleInp(e, product, setProduct)}
            style={{
              // backgroundColor: "wheat",
              color: "#4d7186",
            }}
          />
        </Form.Group>

        <Link to="/places">
          <Button
            variant="primary"
            type="submit"
            onClick={() => saveEditedProduct(product.id, product)}
            style={{
              color: "wheat",
              borderColor: "wheat",
              backgroundColor: " #4d7186",
              margin: "5px",
            }}
          >
            save
          </Button>
        </Link>

        <Link to="/places">
          <Button
            style={{
              color: "wheat",
              borderColor: "wheat",
              backgroundColor: " #4d7186",
              margin: "5px",
            }}
            variant="dark"
            onClick={() => history.push("/places")}
          >
            cancel
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default EditPlace;
