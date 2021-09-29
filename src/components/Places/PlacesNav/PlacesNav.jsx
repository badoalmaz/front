import React, { useState } from "react";
import classes from "./PlacesNav.module.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
// import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useProducts } from "../../../contexts/ProductContext";
import { Link } from "react-router-dom";

const PlacesNav = () => {
  const { history, getProductsData, cart, favs } = useProducts();
  const [type, setType] = useState(getType());

  function getType() {
    const search = new URLSearchParams(history.location.search);
    return search.get("type");
  }

  const handleChangeType = (e) => {
    if (e.target.value == "all") {
      const search = new URLSearchParams(history.location.search);
      search.delete("type");
      history.push(`${history.location.pathname}?${search.toString()}}`);
      getProductsData();
      setType(e.target.value);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("type", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
    setType(e.target.value);
  };

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
  };

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{
              // height: "60px",
              padding: "5px",
              // backgroundColor: "red",
              fontSize: 20,
              fontFamily: '"Merienda"',
              display: "grid",
              gridAutoColumns: "3fr 1fr",
            }}
          >
            <div
              className={classes.control}
              value={type}
              onChange={handleChangeType}
            >
              <label className={classes.radio}>
                <input type="radio" name="rsvp" value="restaurant" />
                RESTAURANT
              </label>
              <label className={classes.radio}>
                <input type="radio" name="rsvp" value="bar" />
                BAR
              </label>
              <label className={classes.radio} disabled>
                <input type="radio" name="rsvp" value="pub" />
                PUB
              </label>
              <label className={classes.radio} disabled>
                <input type="radio" name="rsvp" value="coffehouse" />
                COFFEEHOUSE
              </label>
              <label className={classes.radio} disabled>
                <input type="radio" name="rsvp" value="cafeteria" />
                CAFETERIA
              </label>
              <label className={classes.radio} disabled>
                <input type="radio" name="rsvp" value="fastfood" />
                FASTFOOD
              </label>
              <label className={classes.radio} disabled>
                <input type="radio" name="rsvp" value="all" />
                ALL
              </label>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={classes.search}>
        <Form className="d-flex">
          <FormControl
            className={classes.searchinp}
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            color="secondary"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => handleValue(e)}
            style={{
              // backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: "20px",
              border: "3px solid wheat",
              width: "25vw",
            }}
          />
        </Form>

        <label className={classes.favorite} disabled>
          <div type="radio" name="rsvp" value="all" />
          &#x2665;
        </label>
      </div>
    </div>
  );
};

export default PlacesNav;
