// next imports
import Link from "next/link";

// react imports
import { Button, Container, Row } from "react-bootstrap";

// custom components
import LoginForm from "./LoginForm";
import ForgottenPassword from "./ForgottenPassword";

// urls
import { SIGNUP_PAGE } from "../../../urls/in_app_urls";

export const Login: React.FC = () => {
  return (
    <Container className="flex flex-col content-center">
      <Container className="text-center m-2 w-full">
        login credentials
      </Container>
      <LoginForm />
      <Container className="text-center text-sm m-2 mt-5 w-full">
        Don't have an account?
      </Container>
      <Container className="flex justify-center mt-2 mb-2 max-w-xs">
        <Link href={SIGNUP_PAGE}>
          <Button className="text-white bg-black w-80 h-10 rounded-md text-sm">
            Sign up here!
          </Button>
        </Link>
      </Container>
      <ForgottenPassword />
    </Container>
  );
};

export default Login;
