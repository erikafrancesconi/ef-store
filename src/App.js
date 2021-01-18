import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import { HomePage, Shop, SignIn } from "pages";
import { Header, Footer } from "components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/shop"><Shop /></Route>
          <Route path="/signin"><SignIn /></Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
