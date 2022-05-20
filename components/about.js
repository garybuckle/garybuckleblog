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
        <Image
          src={aboutMedia}
          width={800}
          layout="intrinsic"
          alt="me in a field"
        />
      </section>
      <section className=" justify-center flex-col md:flex-row flex items-center  mt-16 mb-16 md:mb-12">
        {" "}
        <p>
          {" "}
          Welcome to my website, it's not much as yet but I am working on it. I
          built it using NextJS and in order to get it up quickly used a
          template. I have a few plans to make it something useful. Mostly I am
          going to concentrate on Running and health and fitness, Robotics and
          Automation but from an historical perspective and technology such as
          computers, devices and software.
          <p>Sounds good?</p>
          <p>Stick around and lets see what develops</p>
        </p>
      </section>
    </>
  );
}
