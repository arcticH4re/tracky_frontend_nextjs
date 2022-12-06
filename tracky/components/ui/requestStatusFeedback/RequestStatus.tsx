// react imports
import { Container } from "react-bootstrap";

// custom components
import LoadingRequest from "./LoadingRequest";
import ErrorShow from "./ErrorShow";
import RequestSuccessFeedback from "./RequestSuccessFeedback";

// types
import { ErrorMessage } from "./ErrorShow";

const RequestStatus: React.FC<{
  isLoading: boolean;
  requestSent: boolean;
  error: ErrorMessage;
  successMessage?: string;
  errorGoToPage?: string | null;
  errorGoToMessage?: string | null;
}> = (props) => {
  let successMessage = props.successMessage || "The request was sent";
  return (
    <Container>
      {props.isLoading && <LoadingRequest />}
      {props.requestSent && props.error.message !== "" && (
        <ErrorShow
          errorMessage={props.error}
          goToPage={props.errorGoToPage}
          goToMessage={props.errorGoToMessage}
        />
      )}
      {props.requestSent && !props.isLoading && props.error.message == "" && (
        <RequestSuccessFeedback successMessage={successMessage} />
      )}
    </Container>
  );
};

export default RequestStatus;
