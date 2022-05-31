import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Footer from "../components/footer";
import Image from "next/dist/client/image";
import robotMedia from "../public/assets/media/robot.png";
import macMedia from "../public/assets/media/mac.png";
import styles from "../styles/resume.module.css";

export default function Resume() {
  return (
    <Layout>
      <>
        <section className="grid grid-cols-1 place-items-center ">
          Resume
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <h2>Gary Buckle </h2>
            <h2>Learning Tools Developer</h2>
          </div>
          <div>
            <h2>Contact </h2>
            <h2>Tel. Nr </h2>
            <h2>Location </h2>
          </div>
        </section>
      </>
    </Layout>
  );
}
