// react imports
import { Container } from "react-bootstrap";

// custom components
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout: React.FC<{ children: any }> = (props) => {
  return (
    <Container className="rounded-md text-white max-w-full">
      <MainNavigation />
      <Container className="flex m-2 min-h-screen max-w-full">
        {props.children}
      </Container>
      <Footer />
    </Container>
  );
};

export default Layout;