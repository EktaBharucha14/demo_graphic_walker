// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import auth from "../store/apps/auth";


export const store = configureStore({
  reducer: {
    auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
