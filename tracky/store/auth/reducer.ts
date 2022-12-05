import { createReducer } from "@reduxjs/toolkit";
import {
  setAccessToken,
  deleteAccessToken,
  setRefreshToken,
  deleteRefreshToken,
  setCurrentUser,
  deleteCurrentUser,
  logoutUser,
} from "./actions";

export type CurrentUser = {
  username: string;
  email: string;
};

export type AuthState = {
  accessToken: string;
  refreshToken: string;
  currentUser: CurrentUser;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  accessToken: "noToken",
  refreshToken: "noToken",
  currentUser: {
    username: "none",
    email: "none",
  },
  isAuthenticated: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAccessToken, (state, action) => {
      // update state
      state.accessToken = action.payload!;
      state.isAuthenticated = true;
      // update localStorage
      localStorage.setItem("AHaccessToken", state.accessToken);
    })
    .addCase(deleteAccessToken, (state) => {
      // update state
      state.accessToken = "noToken";
      state.isAuthenticated = false;
      // update localStorage
      localStorage.removeItem("AHaccessToken");
    })
    .addCase(setRefreshToken, (state, action) => {
      // update state
      state.refreshToken = action.payload!;
      // update localStorage
      localStorage.setItem("AHrefreshToken", state.refreshToken);
    })
    .addCase(deleteRefreshToken, (state) => {
      state.refreshToken = "noToken";
    })
    .addCase(setCurrentUser, (state, action) => {
      state.currentUser = {
        username: action.payload!.username,
        email: action.payload!.email,
      };
      localStorage.setItem("AHcurrentUserName", state.currentUser.username);
      localStorage.setItem("AHcurrentUserEmail", state.currentUser.email);
    })
    .addCase(deleteCurrentUser, (state) => {
      state.currentUser = {
        username: "none",
        email: "none",
      };
    })
    .addCase(logoutUser, (state) => {
      // update state
      state.accessToken = "noToken";
      state.refreshToken = "noToken";
      state.isAuthenticated = false;
      (state.currentUser = {
        username: "none",
        email: "none",
      }),
      // update localStorage
      localStorage.removeItem("AHaccessToken");
      localStorage.removeItem("AHrefreshToken");
      localStorage.removeItem("AHcurrentUserName");
      localStorage.removeItem("AHcurrentUserEmail");
      localStorage.removeItem("AHexpirationTime");
    });
});
