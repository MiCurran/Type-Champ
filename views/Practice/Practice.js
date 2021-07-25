import Head from "next/head";
import Link from "next/link";
import styles from "./Practice.module.scss";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useEffect, useState, useRef } from 'react';
import { useUser } from "@clerk/clerk-react";
import Image from 'next/image';
import usePractice from "./usePractice";

const Practice = (props) => {
  const {searchInput,
    startTimer,
    counter,
    wpm,
    expired,
    value,
    handleChooseRandomPhrase,
    handleReset,
    handleValueChange,
    setStartTimer,
    letterColors,
    hits,
    misses,
    user} = usePractice(props)

    return (
  <div className={styles.container}>
    <Head>
      <title>{startTimer ? 'Testing' : 'Typing speed test'}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Head>
        <h1>Practice Test</h1>
        <Image className={startTimer && !expired ? `${styles.hourglass} ${styles.spinning}`: `${styles.hourglass} `} src="/icons/hourglass.svg" width="100" height="100" alt="hourglass" />
        <h3><span className={styles.timer}>{counter}</span> seconds left</h3>
        <p>{wpm} this is how many wpm</p>
        <p>we can put user stats like avg wpm here</p>
        {hits} {misses}
        <p>{user ? user.firstName : 'nothin...'}</p>

        <textarea
            ref={searchInput}
            style={{opacity: 0.01}}
            autoFocus
            disabled={expired}
            value={value}
            onKeyDown={() => setStartTimer(true)}
            onChange={(e) => handleValueChange(e.target.value)}
        >
        </textarea>
        <div className={styles.testPhrase}>
            <section>
              {letterColors}
            </section>
        </div>
        <button onClick={() => setStartTimer(!startTimer)}>start/stop timer</button>
        <button onClick={() => handleReset()}>reset</button>
        <button onClick={() => handleChooseRandomPhrase()}>new test</button>
  </div>
)
};

export default Practice;
 