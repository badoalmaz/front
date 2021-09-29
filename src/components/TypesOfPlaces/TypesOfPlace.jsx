import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./TypesOfPlaces.module.css";
const TypesOfPlace = () => {
  return (
    <div className={classes.mainContainer}>
      <Link to="places">
        <div className={classes.container}>
          <Image
            className={classes.image}
            variant="top"
            src="https://source.unsplash.com/800x600/?restaurant"
          />
          <div className={classes.middle}>
            <div className={classes.text}>restaurant</div>
          </div>
        </div>
      </Link>

      <Link to="places">
        <div className={classes.container}>
          <Image
            className={classes.image}
            variant="top"
            src="https://source.unsplash.com/800x600/?bar"
          />
          <div className={classes.middle}>
            <div className={classes.text}>bar</div>
          </div>
        </div>
      </Link>

      <Link to="places">
        <div className={classes.container}>
          <Image
            className={classes.image}
            variant="top"
            src="https://source.unsplash.com/800x600/?pub"
          />
          <div className={classes.middle}>
            <div className={classes.text}>pub</div>
          </div>
        </div>
      </Link>

      <Link to="places">
        <div className={classes.container}>
          <Image
            className={classes.image}
            variant="top"
            src="https://source.unsplash.com/800x600/?coffee"
          />
          <div className={classes.middle}>
            <div className={classes.text}>coffee house</div>
          </div>
        </div>
      </Link>

      <Link to="places">
        <div className={classes.container}>
          <Image
            className={classes.image}
            variant="top"
            src="https://source.unsplash.com/800x600/?cafeteria"
          />
          <div className={classes.middle}>
            <div className={classes.text}>cafeteria</div>
          </div>
        </div>
      </Link>

      <Link to="places">
        <div className={classes.container}>
          <Image
            className={classes.image}
            variant="top"
            src="https://source.unsplash.com/800x600/?fastfood"
          />
          <div className={classes.middle}>
            <div className={classes.text}>fast food</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TypesOfPlace;
