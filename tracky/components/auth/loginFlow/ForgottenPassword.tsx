// next imports
import Link from "next/link";

// react imports
import { Container, Button } from "react-bootstrap";

// urls
import { PASSWORD_RESET_PAGE } from "../../../urls/in_app_urls";

const ForgottenPassword: React.FC = () => {
  return (
    <Container className="flex flex-col">
      <Container className="flex justify-center text-sm m-2">
        Did you forget your password?
      </Container>
      <Container className="flex justify-center mt-2 mb-2 max-w-xs">
        <Link href={PASSWORD_RESET_PAGE}>
          <Button className="border-black text-white bg-black max-w-xs w-80 h-10 rounded-md text-sm">
            Reset your password here
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default ForgottenPassword;
