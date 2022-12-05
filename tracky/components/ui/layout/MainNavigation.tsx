// next imports
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// react imports
import { Container, Navbar, Nav, Button } from "react-bootstrap";

// urls
import {
  HOME_PAGE,
  ABOUT_PAGE,
  DASHBOARD_PAGE,
  CONTACT_PAGE,
  PROFILE_PAGE,
  LOGIN_PAGE,
} from "../../../urls/in_app_urls";

// store
import { useAppDispatch, useAppSelector } from "../../../hooks/store-hooks";
import { selectIsAuthenticated, logoutUser } from "../../../store/auth";

const MainNavigation = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const router = useRouter();

  const Logout = () => {
    dispatch(logoutUser());
    router.push(HOME_PAGE);
  };
  
  return (
    <div className="max-w-full">
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href={HOME_PAGE}>
          <Container className="flex flex-row">
            <Image
              src="/vercel.svg"
              className="mr-3 sm:h-9 border-4 border-black rounded-full"
              width={40}
              height={40}
              alt="logo"
            />
            <Container className="flex items-end mx-2 text-sm text-white">
              trackiE
            </Container>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-4 ml-auto">
            <Nav.Item className="flex items-end ml-2 mb-1 text-sm">
              <Link href={DASHBOARD_PAGE}>
                <a className="text-white no-underline">Dashboard</a>
              </Link>
            </Nav.Item>
            <Nav.Item className="flex items-end ml-2 mb-1 text-sm">
              <Link href={PROFILE_PAGE}>
                <a className="text-white no-underline">Profile</a>
              </Link>
            </Nav.Item>
            <Nav.Item className="flex items-end ml-2 mb-1 text-sm">
              <Link href={ABOUT_PAGE}>
                <a className="text-white no-underline">About</a>
              </Link>
            </Nav.Item>
            <Nav.Item className="flex items-end ml-2 mb-1 text-sm">
              <Link href={CONTACT_PAGE}>
                <a className="text-white no-underline">Contact</a>
              </Link>
            </Nav.Item>
            {!isAuthenticated && (
              <Nav.Item className="flex items-end text-sm">
                <Button
                  className="ml-2 mb-1 text-sm text-white bg-black border-black outline-0"
                >
                  <Link href={LOGIN_PAGE}>Login</Link>
                </Button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavigation;
