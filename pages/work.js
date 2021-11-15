import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Footer from "../components/footer";
import Image from "next/dist/client/image";
import robotMedia from "../public/assets/media/robot.png";
import macMedia from "../public/assets/media/mac.png";

export default function Work() {
  return (
    <Layout>
      <>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="w-full flex justify-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
            Oh No Work!
          </h1>
        </section>
        <section className="w-full flex justify-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          <Image
            className="mr-8"
            src={robotMedia}
            alt="Robot"
            width="300"
            height="314"
          />
          <Image src={macMedia} alt="Robot" width="314" height="215" />
        </section>
        <section className=" justify-center flex-col md:flex-row flex items-center  mt-16 mb-16 md:mb-12">
          {" "}
          <p>
            All work and no play...on the left a rather crude icon of an
            industrial robot and on the left a picture of an Apple iMac. Both
            representing the two worlds I inhabited.
          </p>
        </section>
      </>
    </Layout>
  );
}
