// react imports
import { Container } from "react-bootstrap";

const RequestSuccessFeedback: React.FC<{ successMessage: string }> = (
  props
) => {
  return (
    <Container className="border-black border-1">
      <Container className="border-black border-1">
        {props.successMessage}
      </Container>
    </Container>
  );
};

export default RequestSuccessFeedback;
