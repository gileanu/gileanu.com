import Link from "next/link";
import { ModeToggle } from "./theme-provider-btn";

const Navbar = () => {
  const routes = [
    {
      href: `#`,
      label: "About",
    },
    {
      href: `#`,
      label: "Projects",
    },
    {
      href: `#`,
      label: "Contact",
    },
  ];
  return (
    <nav className="flex items-center gap-4 mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
      {routes.map((route) => (
        <Link key={route.href} href={route.href} className="hover:underline">
          {route.label}
        </Link>
      ))}
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
