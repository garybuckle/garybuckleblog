import Link from "next/link";
import About from "./about";

export default function Menu() {
  return (
    <>
      <ul class="flex mt-6 justify-center text-2xl">
        <Link href="/">
          <a class="text-gray-500 hover:text-blue-800 mr-8">Home</a>
        </Link>

        <Link href="/work">
          <a class="text-gray-500 hover:text-blue-800 mr-8">Work</a>
        </Link>

        <li class="mr-8">
          <a class="text-gray-500 hover:text-blue-800" href="#">
            Rest
          </a>
        </li>
        <li class="mr-8">
          <a class="text-gray-500 hover:text-blue-800" href="#">
            Play
          </a>
        </li>
      </ul>
    </>
  );
}
