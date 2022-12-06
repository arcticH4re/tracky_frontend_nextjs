// next imports
import { useRouter } from "next/router";

// react imports
import React, { FormEvent, MouseEventHandler, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

// custom hooks
import { useAppDispatch } from "../../../hooks/store-hooks";
import { useSendPostRequest } from "../../../hooks/use-http";

// custom components
import RequestStatus from "../../ui/requestStatusFeedback/RequestStatus";

// urls
import { DASHBOARD_PAGE, HOME_PAGE } from "../../../urls/in_app_urls";
import { API_AUTH_JWT_CREATE } from "../../../urls/api_urls";

// store
import {
  setAccessToken,
  setCurrentUser,
  setRefreshToken,
} from "../../../store/auth";
import { useAppSelector } from "../../../hooks/store-hooks";
import { selectIsAuthenticated } from "../../../store/auth";
import { logoutUser } from "../../../store/auth";
import { useCheckToken } from "../../../hooks/auth-hook";

// types
import { UserLoginResponse } from "../../../types/http-types";

// other
import moment from "moment";

const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  return adjExpirationTime - currentTime;
};

const LoginForm: React.FC = () => {
  // do quick auth state refreshment
  useCheckToken();

  const [requestSent, setRequestSent] = useState(false);

  const router = useRouter();
  const isAuth = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  let logoutTimer: ReturnType<typeof setTimeout>;

  const logout = () => {
    dispatch(logoutUser());
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    router.push(HOME_PAGE);
  };

  // at this point user either already logged in
  // or user needs to log in now
  // if user authenticated, we enter here
  if (isAuth && localStorage.getItem("AHexpirationTime")) {
    // we need extra condition due to quick state change and immediate logout

    // deal with logging out setup
    const expirationTime = localStorage.getItem("AHexpirationTime") as string;
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logout, remainingTime);

    // send authenticated user back, or to dashboard if not redirected
    if (router.query.next) {
      router.push(router.query.next as string);
    } else {
      router.push(DASHBOARD_PAGE);
    }
  }

  // if not already authenticated
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const {
    isLoading,
    error,
    sendRequest: sendLoginRequest,
  } = useSendPostRequest();

  const handleToken = (resp: UserLoginResponse) => {
    const responseData = resp.data;
    const { access: accessToken, refresh: refreshToken } = responseData;
    dispatch(setAccessToken(accessToken));
    dispatch(setRefreshToken(refreshToken));
  };

  const submitFormHandler = async (event: FormEvent) => {
    event.preventDefault();
    const enteredUsername = userNameRef.current!.value;
    const enteredPw = passwordRef.current!.value;

    const userData = {
      username: enteredUsername,
      password: enteredPw,
    };

    await sendLoginRequest(
      {
        url: API_AUTH_JWT_CREATE,
        data: userData,
        headers: {
          "Content-Type": "application/json",
        },
      },
      handleToken
    );

    setRequestSent(true);

    if (!error.message) {
      // set current user values
      dispatch(
        setCurrentUser({
          username: enteredUsername,
          email: "something",
        })
      );

      // set timer to log out or refresh token
      const expirationTime = moment(new Date()).add(60, "m").toDate();
      localStorage.setItem("AHexpirationTime", expirationTime.toJSON());
      const remainingTime = calculateRemainingTime(expirationTime.toJSON());
      logoutTimer = setTimeout(logout, remainingTime);

      // // send authenticated user back, or to dashboard if not redirected
      if (router.query.next) {
        router.push(router.query.next as string);
      } else {
        router.push(DASHBOARD_PAGE);
      }
    }
  };
  const loginSuccessMessage = "The login was successful";
  return (
    <Container className="flex flex-col max-w-xs">
      <Form className="flex flex-col" onSubmit={submitFormHandler}>
        <Form.Group className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md">
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">username</Form.Label>
          <Form.Control
            className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 w-5/6 text-sm"
            ref={userNameRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md">
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">password</Form.Label>
          <Form.Control
            type="password"
            className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 w-5/6 text-sm"
            ref={passwordRef}
          ></Form.Control>
        </Form.Group>
        <Button
          className="mt-2 text-sm border-black text-white bg-black border-1 hover:bg-slate-500 max-w-sl w-full h-10 rounded-md"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <Container className="max-w-xs mt-2">
        <RequestStatus
          isLoading={isLoading}
          requestSent={requestSent}
          error={error}
          successMessage={loginSuccessMessage}
        />
      </Container>
    </Container>
  );
};

export default LoginForm;
