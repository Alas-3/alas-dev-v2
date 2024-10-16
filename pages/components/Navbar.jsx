import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const NavBar = ({ active }) => {
  const router = useRouter();

  useEffect(() => {
    // Preload the "about" and "projects" pages when the NavBar component loads
    router.prefetch("/about");
    router.prefetch("/projects");
  }, [router]);

  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-0">
      <nav className="fixed top-3 z-50 w-full max-w-[90%] sm:max-w-md">
        <div className="bg-anti-flash-white rounded-full shadow-lg p-1">
          <ul className="flex justify-between items-center list-none">
            <NavLink href="/" active={active === "home"}>
              Home
            </NavLink>
            <NavLink href="/about" active={active === "about"}>
              About
            </NavLink>
            <NavLink href="/projects" active={active === "projects"}>
              Projects
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ href, active, children }) => {
  return (
    <li className="flex-1 text-center">
      <Link
        href={href}
        className={`block py-2 px-1 sm:px-2 text-xs sm:text-sm transition-colors duration-200 ${
          active
            ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavBar;
