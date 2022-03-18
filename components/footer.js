import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="flex justify-center text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-full">
            <a href="mailto:buckle.g@mac.com">
              click here to send me an old fashioned email
            </a>
          </h3>
        </div>
      </Container>
    </footer>
  );
}
