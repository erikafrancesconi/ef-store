import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    signedIn : false,
    signInType: '',
    currentUser : {
      id : 0,
      name : ''
    }
  },
  reducers: {
    signIn: (state, action) => {
      state.signedIn = true;
      state.currentUser = action.payload;
    },
    signInFromGoogle: (state, action) => {
      state.signInType = 'google';
      state.signedIn = true;
      state.currentUser = action.payload;
    },
    signOut: state => {
      state.signedIn = false;
    },
    setName: (state, action) => {
      state.currentUser.name = action.payload;
    }
  }
})

export const { signIn, signInFromGoogle, signOut, setName } = userSlice.actions;
export const signedIn = state => {
  return state.user.signedIn;
}
export const signInType = state => {
  return state.user.signInType;
}
export const userData = state => {
  return state.user.currentUser;
}
export default userSlice.reducer;