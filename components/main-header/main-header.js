

import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import MainHeaderBg from "@/components/main-header/main-header-bg";
import NavLink from "./nav-link";


export default function MainHeader() {
  

  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals' activeCheck='/meals'>
                Browse Meals
              </NavLink>
            </li>
            <li>
      
              <NavLink href='/community'>
                Foodie community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
