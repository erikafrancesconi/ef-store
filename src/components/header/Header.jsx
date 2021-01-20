import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signedIn, signInType, signOut } from "redux/userslices";
import { auth } from "firebase/firebase.utils";

import './Header.css';

export const Header = () => {
  const dispatch = useDispatch();

  const isSignedIn = useSelector(signedIn);
  const typeSignIn = useSelector(signInType);

  const doSignOut = e => {
    e.preventDefault();

    if (typeSignIn === 'google') {
      auth.signOut();
    }
    dispatch(signOut());
  }

  return (
    <header>
      <h1><Link to="/">EF Store</Link></h1>
      <ul>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>{(isSignedIn && <a href="/signout" onClick={doSignOut}>Sign Out</a>) || <Link to="/signin">Sign In</Link>}</li>
      </ul>
    </header>
  )
}