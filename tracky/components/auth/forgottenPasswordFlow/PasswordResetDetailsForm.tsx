// react imports
import { useState, useRef, FormEvent } from "react";
import { Container, Form, Button } from "react-bootstrap";

// custom components
import RequestStatus from "../../ui/requestStatusFeedback/RequestStatus";

// custom hooks
import { useSendPostRequest } from "../../../hooks/use-http";
import { API_USER_PASSWORD_RESET_CONFIRM } from "../../../urls/api_urls";
import { PASSWORD_RESET_PAGE } from "../../../urls/in_app_urls";

const PasswordResetDetailsForm: React.FC<{
  uid: string | string[] | undefined;
  token: string | string[] | undefined;
}> = (props) => {
  const [requestSent, setRequestSent] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);
  const rePasswordRef = useRef<HTMLInputElement>(null);

  const {
    isLoading,
    error,
    sendRequest: sendPostRequest,
  } = useSendPostRequest();

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredPw = passwordRef.current!.value;
    const enteredRePw = rePasswordRef.current!.value;

    // validation should come here

    const requestData = {
      uid: props.uid,
      token: props.token,
      new_password: enteredPw,
      re_new_password: enteredRePw,
    };

    await sendPostRequest({
      url: API_USER_PASSWORD_RESET_CONFIRM,
      data: requestData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRequestSent(true);
  };

  const requestSuccessMessage = "The request was sent";

  let goToPage: string | null = null;
  let goToMessage: string | null = null;

  // condition page on type of error
  // and give pointers where to g

  if (error.statusCode === 400) {
    error.message =
      "The request was denied, this can happen due to various reasons.";
    goToPage = PASSWORD_RESET_PAGE;
    goToMessage = "Please ask for a new activation link here!";
  }

  return (
    <Container className="flex flex-col max-w-xs">
      <Form className="flex flex-col" onSubmit={submitFormHandler}>
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
          Submit
        </Button>
      </Form>
      <Container className="max-w-xs mt-2">
        <RequestStatus
          isLoading={isLoading}
          requestSent={requestSent}
          error={error}
          successMessage={requestSuccessMessage}
          errorGoToPage={goToPage}
          errorGoToMessage={goToMessage}
        />
      </Container>
    </Container>
  );
};

export default PasswordResetDetailsForm;
