import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPlace from "../components/Admin/AddPlace";
import EditPlace from "../components/Admin/EditPlace";
import Footer from "../components/Footer/Footer";
import MainNavbar from "../components/Navbar/Navbar";
import PlacesDetails from "../components/Places/PlacesDetails/PlacesDetails";
import ProductContextProvider from "../contexts/ProductContext";
import AddPlacePage from "../pages/AddPlacePage";
import AuthPage from "../pages/AuthPage";
// import MainNavbar from "../components/Navbar/Navbar";
import ContactUsPage from "../pages/ContactUsPage";
import EditPlacePage from "../pages/EditPlacePage";
import FavoritesPage from "../pages/FavoritesPage";
import MainPage from "../pages/MainPage";
import PlacesPage from "../pages/PlacesPage";
import WantToVisitPage from "../pages/WantToVisitPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <MainNavbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/places" component={PlacesPage} />
          <Route exact path="/want-to-visit" component={WantToVisitPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
          <Route exact path="/contact-us" component={ContactUsPage} />
          <Route exact path="/add" component={AddPlacePage} />
          <Route exact path="/edit/:id" component={EditPlacePage} />
          <Route exact path="/details/:id" component={PlacesDetails} />
          <Route exact path="/favorites" component={FavoritesPage} />
        </Switch>
        <Footer />
      </ProductContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
