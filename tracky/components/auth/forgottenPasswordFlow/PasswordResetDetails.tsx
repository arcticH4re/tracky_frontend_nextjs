// next imports
import { useRouter } from "next/router";

// react imports
import { Container } from "react-bootstrap";

// custom components
import PasswordResetDetailsForm from "./PasswordResetDetailsForm";

const PasswordResetDetails: React.FC = () => {
  const router = useRouter();
  const { uid, token } = router.query;

  return (
    <Container className="flex flex-col content-center">
      <Container className="text-center m-2 w-full">
        please provide the new password and confirm it
      </Container>
      <PasswordResetDetailsForm uid={uid} token={token} />
    </Container>
  );
};

export default PasswordResetDetails;
