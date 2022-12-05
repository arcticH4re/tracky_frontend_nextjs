// react imports
import { Container, Spinner } from "react-bootstrap";

const LoadingRequest: React.FC = () => {
  return (
    <Container className="flex justify-center m-2">
      <Spinner animation="border" role="status" variant="dark">
        <span className="visually-hidden">Loading</span>
      </Spinner>
    </Container>
  );
};

export default LoadingRequest;
