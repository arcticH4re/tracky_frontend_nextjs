// react imports
import { FormEvent, useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

// custom hooks
import { useSendPostRequest } from "../../../hooks/use-http";

// custom components
import RequestStatus from "../../ui/requestStatusFeedback/RequestStatus";

// urls
import { API_SIGNUP } from "../../../urls/api_urls";

const SignupForm: React.FC = () => {
  const [requestSent, setRequestSent] = useState(false);

  const userNameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rePasswordRef = useRef<HTMLInputElement>(null);

  const {
    isLoading,
    error,
    sendRequest: sendPostRequest,
  } = useSendPostRequest();

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredUsername = userNameRef.current!.value;
    const enteredEmail = emailAddressRef.current!.value;
    const enteredPw = passwordRef.current!.value;
    const enteredRePw = rePasswordRef.current!.value;

    // validation should come here

    const userData = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPw,
      re_password: enteredRePw,
    };

    await sendPostRequest({
      url: API_SIGNUP,
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRequestSent(true);
  };

  const signupSuccessMessage =
    "The signup request went through successfully, " +
    "you have received an email with verification link. " +
    "Check your inbox and click the link, when ready to verify!";

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
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">email</Form.Label>
          <Form.Control
            type="email"
            className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 w-5/6 text-sm"
            ref={emailAddressRef}
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
        <Form.Group className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md">
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">
            {" "}
            repeat password
          </Form.Label>
          <Form.Control
            type="password"
            className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 w-5/6 text-sm"
            ref={rePasswordRef}
          ></Form.Control>
        </Form.Group>
        <Button
          className="mt-2 text-sm border-black text-white bg-black border-1 hover:bg-slate-500 max-w-sl w-full h-10 rounded-md"
          type="submit"
        >
          Signup
        </Button>
      </Form>
      <Container className="max-w-xs mt-2">
        <RequestStatus
          isLoading={isLoading}
          requestSent={requestSent}
          error={error}
          successMessage={signupSuccessMessage}
        />
      </Container>
    </Container>
  );
};

export default SignupForm;
