// next imports
import Link from "next/link";

// react imports
import { Container, Row } from "react-bootstrap";

// custom components
import SignupForm from "./SignupForm";

// urls
import { LOGIN_PAGE } from "../../../urls/in_app_urls";

const Signup: React.FC = () => {
  return (
    <Container className="flex flex-col content-center max-w-full">
      <Container className="text-center m-2 w-full">
        signup credentials
      </Container>
      <SignupForm />
      <Container className="text-center text-sm m-2 mt-5 w-full">
        Already have an account?
      </Container>
      <Container className="flex justify-center mt-2 mb-2 max-w-xs">
        <Link href={LOGIN_PAGE}>
          <button className="text-white bg-black w-80 h-10 rounded-md text-sm">
            Login here!
          </button>
        </Link>
      </Container>
    </Container>
  );
};

export default Signup;
