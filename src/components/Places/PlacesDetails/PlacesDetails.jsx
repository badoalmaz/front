import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../../contexts/ProductContext";
import classes from "./PlacesDetails.module.css";
import { Link } from "react-router-dom";

const PlacesDetails = ({ item }) => {
  const { id } = useParams();
  const {
    getProductDetails,
    productDetails,

    deleteProduct,
    history,
    addProductToFavs,
  } = useProducts();

  console.log("$$$$$$$$$$", productDetails);

  useEffect(() => {
    getProductDetails(id);
    console.log("айди деталей", id);
  }, [id]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={productDetails.img} alt="" />
        </div>

        <div className={classes.info}>
          <h3>
            {" "}
            <span className={classes.dark}> {productDetails.name} </span>
          </h3>
          <span>
            <span className={classes.dark}> Type: </span>
            {productDetails.type}
          </span>
          <span>
            {" "}
            <span className={classes.dark}> Address: </span>{" "}
            {productDetails.address}
          </span>
          <span>
            {" "}
            <span className={classes.dark}> Average bill: </span>{" "}
            {productDetails.averageBill}
          </span>
          <span>
            {" "}
            <span className={classes.dark}> Description: </span>{" "}
            {productDetails.description}
          </span>

          <div className={classes.buttons}>
            <Button
              style={{
                color: "wheat",
                borderColor: "wheat",
                backgroundColor: " #4d7186",
              }}
              onClick={() => history.push(`/edit/${productDetails.id}`)}
              variant="dark"
            >
              Edit
            </Button>

            <Link to="/places">
              <Button
                style={{
                  color: "wheat",
                  borderColor: "wheat",
                  backgroundColor: " #4d7186",
                }}
                onClick={() => deleteProduct(productDetails.id)}
                variant="outline-light"
              >
                Delete
              </Button>
            </Link>

            {/* <Button variant="dark" onClick={() => addProductToFavs(item)}>
              &#x2665;Favorites
            </Button> */}
          </div>
        </div>
      </div>

      <div className={classes.comments}>comments</div>
    </>
  );
};

export default PlacesDetails;
