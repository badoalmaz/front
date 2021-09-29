import classes from "./PlacesList.module.css";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { getCurrentPage } from "../../helpers/functions";
import { useHistory } from "react-router";
import PlacesCard from "./PlacesCard";
import { Pagination } from "react-bootstrap";
import PlacesNav from "./PlacesNav/PlacesNav";
import ScrollToTop from "react-scroll-to-top";

const PlacesList = () => {
  const { productsData, getProductsData, pages } = useProducts();
  const [page, setPage] = useState(getCurrentPage());
  const history = useHistory();
  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    console.log(page);
  }, [page]);

  const handlePage = (e, page) => {
    const search = new URLSearchParams(window.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
    setPage(page);
  };
  useEffect(() => {
    console.log(productsData);
  }, [productsData]);
  return (
    <>
      <PlacesNav />
      <div className={classes.mainContainer}>
        {/* <div className={classes.merchContent} container spacing={6}> */}
        {productsData ? (
          productsData.map((item) => (
            // <Grid item>
            <PlacesCard item={item} key={item.id} />
            // </Grid>
          ))
        ) : (
          <>
            <h1>...loading</h1>
          </>
        )}
        {/* </div> */}
      </div>
      <ScrollToTop
        smooth
        color="black"
        style={{ backgroundColor: "transparent" }}
      />

      {/* <div style={{ alignSelf: "center", margin: "20px auto" }}>
        <Pagination
          style={{
            display: "flex",
            alignSelf: "center",
            margin: "20px auto",
            justifyContent: "center",
          }}
          count={pages}
          color="secondary"
          page={+page}
          onChange={handlePage}
        />
      </div> */}
    </>
  );
};

export default PlacesList;
