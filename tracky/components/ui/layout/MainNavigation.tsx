// next imports
import Link from "next/link";
import Image from "next/image";

// react imports
import { Container, Navbar, Nav } from "react-bootstrap";
import classes from "../../../styles/MainNavigation.module.css";

// urls
import {
  HOME_PAGE,
  ABOUT_PAGE,
  DASHBOARD_PAGE,
  CONTACT_PAGE,
  PROFILE_PAGE,
} from "../../../urls/in_app_urls";

const MainNavigation = () => {
  return (
    <Container className="max-w-full">
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MainNavigation;
