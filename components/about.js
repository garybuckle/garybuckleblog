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
          Welcome to my website, This picture was taken while out running in
          Linslade, Bedfordshire, England, the United Kingdom. Famous for the{" "}
          <a href="https://www.theguardian.com/uk-news/gallery/2014/sep/28/the-great-train-robbery-in-pictures">
            great train robbery
          </a>
          The very spot I am standing on is actually not that far from the
          bridge where the robbery took place. The area itself is beautiful and
          I used to love running around the meadows and woods. I left it all
          behind. We moved to Germany, as yet we are still in transit so to
          speak, we are staying with a good friend in a place called Weilerwist.
          As for this website, it's very much a work in progress. Built using
          NextJS, a React framework and styled using TailwindCSS. I have plans
          to turn it something useful. I just need a bit more time! Mostly I
          would like to talk a lot more about running, squash, fitness,
          robotics, technology and electronics. If this sounds interesting
          then... Stick around and see what develops, when the time comes I will
          start filling up the pages.
        </p>
      </section>
      <Footer />
    </>
  );
}
