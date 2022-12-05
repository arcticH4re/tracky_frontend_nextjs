// next imports
import Link from "next/link";
import { useRouter } from "next/router";

// react imports
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// custom hooks
import { useSendPostRequest } from "../../../hooks/use-http";

// custom components
import LoadingRequest from "../../ui/requestStatusFeedback/LoadingRequest";
import ErrorShow from "../../ui/requestStatusFeedback/ErrorShow";

// urls
import { API_VERIFY_SIGNUP } from "../../../urls/api_urls";
import { LOGIN_PAGE, RESEND_ACTIVATION_PAGE } from "../../../urls/in_app_urls";
import RequestStatus from "../../ui/requestStatusFeedback/RequestStatus";

const UserVerification: React.FC = () => {
  const [requestSent, setRequestSent] = useState(false);

  const router = useRouter();
  const { uid, token } = router.query;

  const {
    isLoading,
    error,
    sendRequest: sendPostRequest,
  } = useSendPostRequest();

  const verificationData = {
    uid: uid,
    token: token,
  };

  useEffect(() => {
    const sendReq = async () => {
      await sendPostRequest({
        url: API_VERIFY_SIGNUP,
        data: verificationData,
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    if (router.isReady) {
      sendReq().finally(() => {
        setRequestSent(true);
      });
    }
  }, [router.isReady]);

  // condition page on type of error
  // and give pointers where to go

  let goToPage: string | null = null;
  let goToMessage: string | null = null;

  if (error.statusCode === 403) {
    error.message =
      "The activation link was already submitted, you should be able to login.";
    goToPage = LOGIN_PAGE;
    goToMessage = "Login here";
  } else if (error.statusCode === 400) {
    error.message = "This link is either expired or incorrect.";
    goToPage = RESEND_ACTIVATION_PAGE;
    goToMessage = "Please ask for a new email here!";
  }

  const requestSuccessMessage = "You are verified! You can now login.";

  return (
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
  );
};

export default UserVerification;
