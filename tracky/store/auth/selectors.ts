import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectAuthAccessToken = (state: RootState) => state.auth.accessToken;
export const selectAuthRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const accessTokenSelector = createSelector(selectAuthAccessToken, state => state);
export const refreshTokenSelector = createSelector(selectAuthRefreshToken, state => state);
export const currentUserSelector = createSelector(selectCurrentUser, state => state);
export const isAuthenticatedSelector = createSelector(selectIsAuthenticated, state => state);
