import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces/user";

const initialState: IUserState = {
  user: null,
  loggedIn: false,
  tokens: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUserState["user"]>) {
      state.user = action.payload;
      state.loggedIn = true;
    },
    setTokens(state, action: PayloadAction<IUserState["tokens"]>) {
      state.tokens = action.payload;
    },
    logoutUser(state) {
      state.user = null;
      state.loggedIn = false;
      state.tokens = null;
    },
  },
});

export const { addUser, setTokens, logoutUser } = userSlice.actions;

export default userSlice.reducer;
