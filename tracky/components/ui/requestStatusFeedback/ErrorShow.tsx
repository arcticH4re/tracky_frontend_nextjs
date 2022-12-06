// next imports
import Link from "next/link";

// react imports
import { Container } from "react-bootstrap";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

export interface ErrorMessage {
  message: string;
  statusCode: number;
}

const ErrorShow: React.FC<{
  errorMessage: ErrorMessage;
  goToPage?: string | null;
  goToMessage?: string | null;
}> = (props) => {
  return (
    <Container className="flex flex-row content-center border-red-200 border-5 rounded-xl text-sm">
      <FontAwesomeIcon
        icon={faExclamation}
        style={{ fontSize: 30, color: "red", margin: "2px" }}
      />
      <Container className="flex flex-col">
        <Container className="text-center text-red-500">
          {props.errorMessage.message}
        </Container>
        {props.goToPage && props.goToMessage && (
          <Container className="border-black border-1">
            <Link href={props.goToPage}>{props.goToMessage}</Link>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default ErrorShow;
