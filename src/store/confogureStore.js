import { createSlice } from '@reduxjs/toolkit'
import { InitialStore } from './initialStore'

export const userSlice = createSlice({
  name: 'users',
  initialState: InitialStore,
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    removeUser: (state, action) => {
      state.userList = state.userList.filter((u) => u.id !== action.payload)
    },
    editUser: (state, action) => {
      state.dataForEditing = action.payload
    },
    editUserSuccess: (state, action) => {
      state.userList = state.userList.map((u) => u.id === action.payload.id ? action.payload : u)
      state.dataForEditing = {}
    }
  },
})

export const { addUser, removeUser, editUser, editUserSuccess } = userSlice.actions

export default userSlice.reducer