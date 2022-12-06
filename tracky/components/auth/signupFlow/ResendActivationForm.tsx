// react imports
import { FormEvent, useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

// custom hooks
import { useSendPostRequest } from "../../../hooks/use-http";

// custom components
import RequestStatus from "../../ui/requestStatusFeedback/RequestStatus";

// urls
import { API_RESEND_ACTIVATION } from "../../../urls/api_urls";

const ResendActivationForm: React.FC = () => {
  const [requestSent, setRequestSent] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);

  const {
    isLoading,
    error,
    sendRequest: sendPostRequest,
  } = useSendPostRequest();

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailRef.current!.value;

    const reqData = {
      email: enteredEmail,
    };

    await sendPostRequest({
      url: API_RESEND_ACTIVATION,
      data: reqData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRequestSent(true);
  };

  const resendSuccessMessage =
    "Sending the reactivation link went through successfully, " +
    "you have received an email with verification link. " +
    "Check your inbox and click the link, when ready to verify!";

  return (
    <Container className="flex flex-col max-w-xs">
      <Form className="flex flex-col" onSubmit={submitFormHandler}>
        <Form.Group className="flex flex-col mt-1 mb-1 border-2 border-slate-300 rounded-md">
          <Form.Label className="mx-4 mb-1 mt-2 text-sm">email</Form.Label>
          <Form.Control
            className="mx-4 mt-0 mb-2 border-1 bg-slate-100 rounded-md p-1 w-5/6 text-sm"
            ref={emailRef}
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
          successMessage={resendSuccessMessage}
        />
      </Container>
    </Container>
  );
};

export default ResendActivationForm;
