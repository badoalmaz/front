import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useProducts } from "../../../contexts/ProductContext";
import classes from "./FavoritePlaces.module.css";

const FavoritePlaces = () => {
  const [count, setCount] = useState([]);
  const { favs, getFavs, changeFavsCount, deleteFavsProducts } = useProducts();

  useEffect(() => {
    getFavs();
  }, [favs]);

  useEffect(() => {
    setCount();
  }, [favs]);

  console.log(favs);

  return (
    <div>
      <div className={classes.tableResponsive}>
        <table className={classes.table}>
          <tbody
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            {favs?.products?.length > 0 &&
              favs.products.map((product) => (
                <tr key={product.item.id}>
                  <td className={classes.cartItems}>
                    <div>
                      <img
                        className={classes.tableCellImg}
                        // src={product.item.image}
                        alt={product.name}
                      />
                      <td className={classes.textStyle}>
                        <Button
                          onClick={() => deleteFavsProducts(product.item.id)}
                        >
                          delete
                        </Button>
                      </td>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoritePlaces;
