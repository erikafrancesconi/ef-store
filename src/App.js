import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomePage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/shop"><Shop /></Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
