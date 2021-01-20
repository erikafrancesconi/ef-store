import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import './App.css';

import { HomePage, Shop, SignIn } from "pages";
import { Header, Footer } from "components";
import { auth } from "firebase/firebase.utils";
import { signInFromGoogle } from "redux/userslices";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged(({ displayName, email }) => {
      dispatch(signInFromGoogle({ id: 0, name: displayName }));
      console.log(email);
   });
  }, [dispatch]);

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
