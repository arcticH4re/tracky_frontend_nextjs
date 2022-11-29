import { Container } from "react-bootstrap";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <Container className="bg-white">
      <div className="grid grid-cols-2 justify-items-center content-center">
        <div className="self-center">
          <h1>Contact us!</h1>
          <p>
            I have absolutely no idea why you would, but if you do, here you
            find what you need to do that. 😀
          </p>
          <ul className="list-none p-0">
            <li>dumdum.dumdum@dumdum.com</li>
            <li>lala.lala@lala.com</li>
          </ul>
        </div>
        <div>
          <Image
            src="/contact.jpg"
            alt="image by pikisuperstar on Freepik"
            width={500}
            height={500}
          />
          <a
            className="text-xs block text-center"
            href="https://www.freepik.com/free-vector/contact-us-concept-landing-page_4663671.htm#page=2&query=contact&position=44&from_view=search&track=sph"
          >
            Image by pikisuperstar on Freepik
          </a>{" "}
        </div>
      </div>
    </Container>
  );
};

export default Contact;
