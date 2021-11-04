import { CMS_NAME } from "../lib/constants";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul class="flex mt-6 justify-center text-2xl">
        <li class="mr-8">
          <a class="text-gray-500 hover:text-blue-800" href="#">
            Work
          </a>
        </li>
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
        <Link href="/blog">
          <a>Articles</a>
        </Link>
      </ul>
    </>
  );
}
