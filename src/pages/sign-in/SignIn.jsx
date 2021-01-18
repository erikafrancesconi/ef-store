import React from 'react';

import { Form } from "components";
import { signInWithGoogle } from "firebase/firebase.utils";

import './SignIn.css';

export const SignIn = () => {
  return (
    <div className="w-2/6">
      <h2>Sign In</h2>
      <div className="px-2 mt-4">
        <Form fields={
          [
            {
              label: "Email",
              id: "eml",
              name: "email",
              type: "text",
              required: true,
              autoComplete: "username"
            },
            {
              label: "Password",
              id: "pwd",
              name: "password",
              type: "password",
              required: true,
              autoComplete: "current-password"
            }
          ]
        }
        submitLabel="Sign In"
        onSubmit={data => { console.log(data) }} />
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
    </div>
  );
}