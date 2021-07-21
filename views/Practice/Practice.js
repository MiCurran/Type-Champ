import Head from "next/head";
import Link from "next/link";
import styles from "./Practice.module.scss";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useEffect, useState, useRef } from 'react';
import { useUser } from "@clerk/clerk-react";
import Image from 'next/image';
import usePractice from "./usePractice";

const Practice = (props) => {
  const {searchInput, startTimer, counter, wpm, expired, value, valueArray, phraseArray, handleChooseRandomPhrase, handleReset, handleValueChange, setStartTimer} = usePractice(props)

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
            <p>
              {phraseArray.map((letter, index)=> {
                if(!valueArray[index]){
                return(
                  <span className={styles.gray} key={index}>{letter}</span>
                )}
                if (index === (valueArray.length - 1) && valueArray[index] === ' '){
                  return (
                    <span key={index} className={letter === valueArray[index] ?  `${styles.green} ${styles.activeLetterSpace}` : `${styles.red} ${styles.activeLetterSpace}`}>
                      {valueArray[index]}
                    </span>
                  )
                }
                if (index === (valueArray.length - 1) && valueArray[index - 1] === ' '){
                  return (
                    <span key={index} className={letter === valueArray[index] ? `${styles.green} ${styles.activeLetterAfterSpace}` : `${styles.red} ${styles.activeLetterAfterSpace}`}>
                      {valueArray[index]}
                    </span>
                  )
                }
                if (index === (valueArray.length - 1)){
                  return (
                    <span key={index} className={letter === valueArray[index] ? `${styles.green} ${styles.activeLetter}` : `${styles.red} ${styles.activeLetter}`}>
                        {valueArray[index]}
                    </span>
                  )
                } 
                else {
                  return (
                    <span key={index} className={letter === valueArray[index] ? styles.green : styles.red}>
                    {valueArray[index]}
                  </span>
                  )
                }
              })}
            </p>
        </div>
        {/* <Highlight className='javascript'>
  {phrase}
</Highlight> */}
        <button onClick={() => setStartTimer(!startTimer)}>start/stop timer</button>
        <button onClick={() => handleReset()}>reset</button>
        <button onClick={() => handleChooseRandomPhrase()}>new test</button>
  </div>
)
};

export default Practice;
 