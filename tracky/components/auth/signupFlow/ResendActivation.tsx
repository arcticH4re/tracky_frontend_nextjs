// react imports
import { Container, Row } from "react-bootstrap";

// custom components
import ResendActivationForm from "./ResendActivationForm";

const ResendActivation: React.FC = () => {
  return (
    <Container className="flex flex-col content-center">
      <Container className="text-center m-2 w-full">
        Please add your email address to receive new activation link!
      </Container>
      <ResendActivationForm />
    </Container>
  );
};

export default ResendActivation;
