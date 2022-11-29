// react imports
import { Container } from "react-bootstrap";

// custom components
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout: React.FC<{ children: any }> = (props) => {
  return (
    <div className="rounded-md max-w-full m-0">
      <MainNavigation />
      <div className="min-h-screen max-w-full m-0 p-0">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
