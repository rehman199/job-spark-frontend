import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces/user";

const initialState: IUserState = {
  user: null,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUserState["user"]>) {
      state.user = action.payload;
      state.loggedIn = true;
    },
    logoutUser(state) {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const { addUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
