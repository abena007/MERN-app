import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.others
      state.token = action.payload.token
      state.isAuthenticated=action.payload.result
    },
    register: (state, action) => {
      state.user = action.payload.others
      state.token = action.payload.token
      state.isAuthenticated=action.payload.result
      
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated=false
      localStorage.clear()
    },
  },
})

export const { login, register, logout } = authSlice.actions

export default authSlice.reducer