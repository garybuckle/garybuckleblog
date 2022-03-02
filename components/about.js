import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import aboutMedia from "../public/assets/media/me-in-a-field.jpg";

export default function About() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="w-full flex justify-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          garybuckle
        </h1>
      </section>
      <section className="w-full flex justify-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
        <Image src={aboutMedia} alt="Me in a field" width="800" height="600" />
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <p>
          {" "}
          garybuckle is just like everyone else, he eats too much chocolate and he moans about everything and anything.
          He likes to keep fit, well... everyone says that don't they.
          He likes to do a bit of coding... it just gives me that feeling of being up to date.
          He likes to run... Long distances, anything from 10km to 100km(that's coming)
          This website is just an effort to get some of that down on ..paper..canvas..web..paper???
          It's also just a project in progress. 
        <p>Plase be patient</p>
        </p>
      </section>
    </>
  );
}
