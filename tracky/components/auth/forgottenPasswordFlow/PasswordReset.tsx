// react imports
import { Container } from "react-bootstrap";

// custom components
import PasswordResetForm from "./PasswordResetForm";

const PasswordReset: React.FC = () => {
  return (
    <Container className="flex flex-col content-center">
      <Container className="text-center m-2 w-full">
        please provide your email address here
      </Container>
      <PasswordResetForm />
    </Container>
  );
};

export default PasswordReset;
