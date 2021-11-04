import { CMS_NAME } from "../lib/constants";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul class="flex mt-6 justify-center">
        <li class="mr-6">
          <a class="text-gray-500 hover:text-blue-800" href="#">
            Blog
          </a>
        </li>
        <li class="mr-6">
          <a class="text-gray-500 hover:text-blue-800" href="#">
            Photos
          </a>
        </li>
        <li class="mr-6">
          <a class="text-gray-500 hover:text-blue-800" href="#">
            Work
          </a>
        </li>
      </ul>
    </>
  );
}
