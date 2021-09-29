import React from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import classes from "./PlacesList.module.css";
const PlacesCard = ({ item }) => {
  const { favs, addProductToFavs } = useProducts();

  return (
    <>
      <div className={classes.container}>
        <Image className={classes.image} variant="top" src={item.img} />
        <div className={classes.middle}>
          <Link to={`/details/${item.id}`}>
            <div className={classes.text}>{item.name}</div>
          </Link>
          <div className={classes.icons}>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "0 solid transparent",
                color: "#4d7186",
                fontSize: "30px",
              }}
              onClick={() => addProductToFavs(item)}
            >
              &#x2665;
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacesCard;
