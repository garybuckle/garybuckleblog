import Link from "next/link";
import About from "./about";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-wrap items-center justify-center p-5 text-2xl">
        <div className="flex md:hidden">
          <button id="hamburger">
            <img
              className="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              className="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
          <Link href="/">
            <a class="text-gray-500 hover:text-blue-800 mr-8">Home</a>
          </Link>
          <Link href="/work">
            <a class="text-gray-500 hover:text-blue-800 mr-8">Work</a>
          </Link>
          <Link href="/">
            <a class="text-gray-500 hover:text-blue-800 mr-8">Rest</a>
          </Link>
          <Link href="/">
            <a class="text-gray-500 hover:text-blue-800 mr-8">Play</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
