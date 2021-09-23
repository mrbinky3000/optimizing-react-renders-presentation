import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'username',
  initialState: {
    username: 'Larry',
    status: 'active'
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUsername } = userSlice.actions

export default userSlice.reducer
