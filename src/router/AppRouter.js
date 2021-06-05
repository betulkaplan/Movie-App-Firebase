import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MoviesProvider } from '../context/MoviesContext';
import { FavouritesProvider } from '../context/FavouritesContext';
import Navbar from '../components/Navbar';
import Main from '../pages/Main';
import Favourites from '../pages/Favourites';
import Footer from '../components/Footer';
import Register from '../pages/Register';
import Login from '../pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <MoviesProvider>
        <FavouritesProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/details/:id" render={() => <h1>Details page</h1>} />
          </Switch>
          <Footer />
        </FavouritesProvider>
      </MoviesProvider>
    </Router>
  );
};

export default AppRouter;
