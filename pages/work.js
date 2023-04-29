import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Image from "next/dist/client/image";
import robotMedia from "../public/assets/media/robot.png";
import macMedia from "../public/assets/media/mac.png";

export default function Work() {
  return (
    <Layout>
      <>
        <section className="grid grid-cols-4 gap-4  ">
          <div className=" md:text-2xl mt-5 text-gray-400 ml-5">
            <Link href="/htmldemo">
              <a className="hover:underline">WebSites with HTML and CSS</a>
            </Link>
            <div className="text-base text-gray-800 mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              consectetur, laboriosam iure explicabo vitae deserunt saepe quae
              autem, consequuntur, alias animi distinctio. Est odit aut
              repudiandae ut quibusdam laudantium mollitia?
            </div>
          </div>

          <div className="md:text-2xl mt-5 text-gray-500 ml-5">
            <a className="hover:underline">
              Interative WebSites with JavaScript
            </a>
            <div className="text-base text-gray-800 mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              consectetur, laboriosam iure explicabo vitae deserunt saepe quae
              autem, consequuntur, alias animi distinctio. Est odit aut
              repudiandae ut quibusdam laudantium mollitia?
            </div>
          </div>
          <div className="md:text-2xl mt-5 text-gray-500 ml-5">
            Bootstrap and TailWindCSS
            <div className="text-base text-gray-800 mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              consectetur, laboriosam iure explicabo vitae deserunt saepe quae
              autem, consequuntur, alias animi distinctio. Est odit aut
              repudiandae ut quibusdam laudantium mollitia?
            </div>
          </div>
          <div className="md:text-2xl mt-5 text-gray-500 ml-5">
            React and NextJS
            <div className="text-base text-gray-800 mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              consectetur, laboriosam iure explicabo vitae deserunt saepe quae
              autem, consequuntur, alias animi distinctio. Est odit aut
              repudiandae ut quibusdam laudantium mollitia?
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}
