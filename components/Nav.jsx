import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const currentRouteStyle = `text-black bg-white rounded py-2 px-6 mx-2 w-1/4 text-center`;
  const notCurrentRouteStyle = `text-white hover:text-black hover:bg-white rounded py-2 px-6 w-1/4 text-center`;

  return (
    <nav className="bg-gray-500 p-2 flex justify-center">
      <div className="w-full flex justify-between max-w-screen-md">
        <Link href="/">
          <a
            className={
              router.pathname === "/" ? currentRouteStyle : notCurrentRouteStyle
            }
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={
              router.pathname === "/about"
                ? currentRouteStyle
                : notCurrentRouteStyle
            }
          >
            About
          </a>
        </Link>
        <Link href="/writing">
          <a
            className={
              router.pathname === "/writing"
                ? currentRouteStyle
                : notCurrentRouteStyle
            }
          >
            Writing
          </a>
        </Link>
        <Link href="https://twitter.com/tucker_dev">
          <a className={notCurrentRouteStyle}>Tweets</a>
        </Link>
      </div>
    </nav>
  );
}
