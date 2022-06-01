import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import aboutMedia from "../public/assets/media/me-in-a-field.jpg";
import Footer from "../components/footer";

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
          Welcome to my website, very much a work in progress.Built using NextJS
          a REact framework and styled using TailwindCS. I have a few plans to
          turn it something useful. Mostly I am going to talk about Running,
          health and fitness, Robotics and Automation but more from an
          historical perspective, technology such as computers, devices and
          software.
          <p>If this sounds interesting then</p>
          <p>Stick around and lets see what develops</p>
        </p>
      </section>
      <Footer />
    </>
  );
}
