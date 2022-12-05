// react imports
import { useEffect } from "react";

// store
import { useAppDispatch } from "./store-hooks";
import { useAppSelector } from "./store-hooks";
import { selectAuthAccessToken } from "../store/auth";
import { setAccessToken, setCurrentUser, setRefreshToken } from "../store/auth";

export const useCheckToken = () => {
  // this is used where user must be authenticated to see page
  // we quickly query localStorage and if userData and tokens are there
  // and tokens has not expired yet
  // we setup the state

  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAuthAccessToken);

  useEffect(() => {
    const savedAccessToken = localStorage.getItem("AHaccessToken");
    const savedRefreshToken = localStorage.getItem("AHrefreshToken");
    const savedUserName = localStorage.getItem("AHcurrentUserName");
    const savedUserEmail = localStorage.getItem("AHcurrentUserEmail");
    const savedExpirationTime = localStorage.getItem("AHexpirationTime");

    if (
      savedAccessToken &&
      savedRefreshToken &&
      savedUserName &&
      savedUserEmail &&
      Date.parse(savedExpirationTime as string) > new Date().getTime() &&
      (!accessToken || accessToken === "noToken")
    ) {
      dispatch(setAccessToken(savedAccessToken));
      dispatch(setRefreshToken(savedRefreshToken));
      dispatch(
        setCurrentUser({
          username: savedUserName,
          email: savedUserEmail,
        })
      );
    }
  });
};
