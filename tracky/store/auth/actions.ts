import { createAction } from "@reduxjs/toolkit";
import { CurrentUser } from "./reducer";

export const setAccessToken = createAction<string>('auth/setAccessToken');
export const deleteAccessToken = createAction('auth/deleteAccessToken');

export const setRefreshToken = createAction<string>('auth/setRefreshToken');
export const deleteRefreshToken = createAction('auth/deleteRefreshToken');

export const setCurrentUser = createAction<CurrentUser>('auth/setCurrentUser');
export const deleteCurrentUser = createAction('auth/deleteCurrentUser');

export const logoutUser = createAction('auth/logoutUser');