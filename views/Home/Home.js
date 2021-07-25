import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.scss";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Practice from "../Practice/Practice";
import { useUser } from "@clerk/clerk-react";


const SignedInPractice = ({...props}) => {
  const user = useUser();
  return  <Practice user={user}/> ;
};
  
  const Home = ({...props}) => (
    <div className={styles.container}>
      <Head>
        <title>Type Warrior</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <SignedIn>
        <SignedInPractice {...props}/>
      </SignedIn>
    </div>
  );
  
  export default Home;