import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        garybuckle
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}. In an age where blogs died, where hashtags and emojis
        rule the web, where social media outgunned the simple web site.
        <p>I made a blog!</p>
        <p>I know... ridiculous!!!</p>
        <p>stop laughing and get reading...</p>
      </h4>
    </section>
  );
}
