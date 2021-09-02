import { configureStore } from '@reduxjs/toolkit'
import reducers from "./confogureStore";
import { reducer as formReducer } from 'redux-form'

export default configureStore({
  reducer: {
    users: reducers,
    form: formReducer,
  },
})