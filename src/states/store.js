import {configureStore} from "@reduxjs/toolkit";
import mangasSlice from "./mangasSlice";

const store = configureStore({
  reducer: {
    mangas: mangasSlice,
  }
})

export default store;