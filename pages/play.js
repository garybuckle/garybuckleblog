import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Footer from "../components/footer";
import Image from "next/dist/client/image";
import robotMedia from "../public/assets/media/robot.png";
import macMedia from "../public/assets/media/mac.png";

export default function Play() {
  return (
    <Layout>
      <>
        <section className=" justify-center flex-col md:flex-row flex items-center  ml-16 mr-16 mt-16 mb-16 md:mb-12">
          {" "}
          <p>
            All play and no work...This bit is still under construction so click
            or tap home and go back to the main page.
          </p>
        </section>
      </>
    </Layout>
  );
}
