import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>EF Store</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/shop"><Shop /></Route>
        </Switch>
      </main>
      <footer>&copy; EFLab</footer>
    </React.Fragment>
  );
}

export default App;
