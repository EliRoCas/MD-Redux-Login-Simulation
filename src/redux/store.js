import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import usersReducer from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    users: usersReducer,
  },
});
