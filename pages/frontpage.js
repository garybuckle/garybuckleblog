import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Footer from "../components/footer";

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
