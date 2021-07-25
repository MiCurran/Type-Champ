import Head from "next/head";
import Link from "next/link";
import styles from "./Practice.module.scss";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useEffect, useState, useRef } from 'react';
import { useUser } from "@clerk/clerk-react";
import Image from 'next/image';
import usePractice from "./usePractice";
import { Stats } from "./components/stats";

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
    phrase,
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
        {!expired 
          ?(
<div className="row">
        <Image
          className={startTimer && !expired ? `${styles.sword} ${styles.fighting}`: `${styles.sword} `}
          src="/sword.svg" 
          width="100"
          height="100"
          alt="hourglass" 
        />
        <Image
          className={startTimer && !expired ? `${styles.swordFlipped} ${styles.fighting}`: `${styles.swordFlipped} `}
          src="/sword.svg" 
          width="100"
          height="100"
          alt="hourglass" 
        />
        </div>
          )
          : (<Image
            src="/win.svg" 
            width="200"
            height="200"
            alt="Win Image" 
          />)
        }
        {/* <Image
          className={startTimer && !expired ? `${styles.hourglass} ${styles.spinning}`: `${styles.hourglass} `}
          src="/icons/hourglass.svg" 
          width="100"
          height="100"
          alt="hourglass" 
        /> */}
        <h3><span className={styles.timer}>{counter}</span> seconds left</h3>
        <p>{user ? user.firstName : 'Sign in to save your stats'}</p>

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
        {!expired
            ?
                <section>
                  {letterColors}
                </section>
            : <section style={{width: '90vw'}}><Stats hits={hits} misses={misses} wpm={wpm} phrase={value}/></section>
        }
        </div>
        <button onClick={() => setStartTimer(!startTimer)}>start/stop timer</button>
        <button onClick={() => handleReset()}>reset</button>
        <button onClick={() => handleChooseRandomPhrase()}>new test</button>
  </div>
)
};

export default Practice;
 