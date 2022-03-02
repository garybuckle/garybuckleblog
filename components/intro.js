import { CMS_NAME } from "../lib/constants";
import Link from "next/dist/client/link";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">
        garybuckle
        </Link>
        
        
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <p>In an age where blogs seemingly died, where hashtags and emojis
        rule the internet</p><p> Where social media outperformed the simple web site.</p>
        <p>I made a blog!</p>
        <p>I know... completely ridiculous!!!</p>
        <p>Stop laughing and get reading...</p>
      </h4>
    </section>
  );
}
