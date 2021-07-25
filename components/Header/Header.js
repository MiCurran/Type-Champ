import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <Link href="/">
        <a className={styles.logo}>
          <Image src="/sword.svg" width="64" height="64" alt="Logo" />
          <span className={styles.appName}>Type Warrior</span>
        </a>
      </Link>
    </div>
    <div className={styles.right}>
      <Link href="/">Rankings</Link>
      <Link href="/">My Warrior</Link>
      <SignedOut>
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </header>
);

export default Header;
