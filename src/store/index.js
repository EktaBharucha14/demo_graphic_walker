// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import auth from "../store/apps/auth";
import graphicWalker from "../store/apps/graphic_walker";

export const store = configureStore({
  reducer: {
    auth,
    graphicWalker
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
