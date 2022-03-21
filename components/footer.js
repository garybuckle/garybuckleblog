import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="px-0 flex flex-col lg:flex-row items-center">
          <h3 className="flex justify-center text-2xl  tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-full">
            <a href="mailto:buckle.g@mac.com">Contact Me</a>
          </h3>
        </div>
      </Container>
    </footer>
  );
}
