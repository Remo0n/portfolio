import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { site } from "../data/site";
import style from "../styles/Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Work" },
];

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Link href="/" className={style.wordmark}>
          {site.name}
        </Link>
        <button
          type="button"
          className={style.toggle}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <AiOutlineClose /> : <HiOutlineMenu />}
        </button>
        <nav
          id="primary-nav"
          className={`${style.nav} ${open ? style.navOpen : ""}`}
          aria-label="Primary"
        >
          {links.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${style.link} ${active ? style.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
