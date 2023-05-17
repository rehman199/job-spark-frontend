import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  user: {
    name: string,
    email: string,
  }
}

const initialState: UserState = {
  user: {
    name: "",
    email: "",
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    insertUser(state, action: PayloadAction<UserState['user']>){
        state.user = action.payload
    }
  }
})

export const { insertUser } = userSlice.actions

export default userSlice.reducer;