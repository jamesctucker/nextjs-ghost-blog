import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-500 p-4 flex justify-center">
      <div className="w-full flex justify-between max-w-screen-md">
        <Link href="/">
          <a className="text-white hover:text-black hover:bg-white rounded py-2 px-6">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="text-white hover:text-black hover:bg-white rounded py-2 px-6">
            About
          </a>
        </Link>
        <Link href="/writing">
          <a className="text-white hover:text-black hover:bg-white rounded py-2 px-6">
            Writing
          </a>
        </Link>
        <Link href="https://twitter.com/tucker_dev">
          <a className="text-white hover:text-black hover:bg-white rounded py-2 px-6">
            Tweets
          </a>
        </Link>
      </div>
    </nav>
  );
}
