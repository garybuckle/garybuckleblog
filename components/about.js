import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import aboutMedia from "../public/assets/media/inafield.png";
import Menu from "./menu";

export default function About() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="w-full flex justify-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          garybuckle
        </h1>
      </section>
      <section className="w-full flex justify-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
        <Image src={aboutMedia} alt="Me in a field" />
      </section>
      <section className=" justify-center flex-col md:flex-row flex items-center  mt-16 mb-16 md:mb-12">
        {" "}
        <p>
          Hello, click on a link in the menu above to navigate, you know how it
          works.
        </p>
      </section>
    </>
  );
}
