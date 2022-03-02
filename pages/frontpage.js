import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Footer from "../components/footer";
import Image from "next/dist/client/image";
import aboutMedia from "../public/assets/media/inafield.png";

export default function Frontpage() {
  return (
    <>
      <Layout>
        <Head>
          <title>garybuckle Blog</title>
        </Head>
      </Layout>
    </>
  );
}
