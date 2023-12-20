import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logoImg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import MainHeaderBg from "@/components/main-header/main-header-bg";


export default function MainHeader() {

  const path = usePathname(); 

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
              <Link href="/meals" className={path.startsWith('/meals') ? 'active' : ''}>browse meals</Link>
            </li>
            <li>
              <Link href="/community">Foodie community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
