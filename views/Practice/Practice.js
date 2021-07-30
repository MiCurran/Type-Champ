import Head from 'next/head';
import Link from 'next/link';
import styles from './Practice.module.scss';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { useEffect, useState, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import Image from 'next/image';
import usePractice from './usePractice';
import { Stats } from './components/stats';
import { Box, Heading, Button, VStack, HStack, } from '@chakra-ui/react';
import { MdReplay } from 'react-icons/md';
const Practice = (props) => {
    const { searchInput,
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
        mode,
        submitUserWpm,
        user } = usePractice(props);
    
    const warrior = { 'id': 1,
        'experience': 5.83,
        'avg-wpm': 100,
        'tests': [100],
        'clerkID': null,
        'updatedAt': '2021-07-29',
        'displayName': 'Jimmy Crack Corn',
        'avg-mistakes': 2,
        'mistakes': [2] };
    return (
        <div className={styles.container}>
            <Head>
                <title>{startTimer ? 'Testing' : 'Type Warrior'}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>
            <Heading as="h1">Type Warrior</Heading>
            <Heading textColor="gray.500" as="h3">Fight the clock or fight mistakes!</Heading>
            {!expired && <Heading as="h3"><span className={styles.timer}>{counter}</span></Heading>}
            {!expired
                ? (
                    <div className="row">
                        <Image
                            className={startTimer && !expired ? `${styles.sword} ${styles.fighting}` : `${styles.sword} `}
                            src="/sword.svg"
                            width="100"
                            height="100"
                            alt="hourglass"
                        />
                        <Image
                            className={startTimer && !expired ? `${styles.swordFlipped} ${styles.fighting}` : `${styles.swordFlipped} `}
                            src="/sword.svg"
                            width="100"
                            height="100"
                            alt="hourglass"
                        />
                    </div>
                )
                : (
                    <VStack>
                        <Image
                            src={misses <= mode.details.missesAllowed ? '/win.svg' : '/lose.svg'}
                            width="200"
                            height="200"
                            alt="Win Image"
                        />
                    </VStack>
                )
          
            }
            <textarea
                ref={searchInput}
                style={{ opacity: 0.01 }}
                autoFocus
                disabled={expired}
                value={value}
                onKeyDown={() => setStartTimer(true)}
                onChange={(e) => handleValueChange(e.target.value)}
            >
            </textarea>
            <Box className={styles.testPhrase}>
                {!expired
                    ? (
                        <section className={styles.scrollingLetterSection}>
                            {letterColors}
                        </section>
                    )
                    : <Stats hits={hits} misses={misses} wpm={wpm} phrase={value}/>
                }
            </Box>
            <HStack>
                {!expired &&
                    <Button colorScheme="blue" variant="outline" onClick={() => setStartTimer(true)}>start!</Button>
                }
                <Button leftIcon={<MdReplay />}colorScheme="blue" variant="solid" onClick={() => handleChooseRandomPhrase()}>
                    {misses <= mode.details.missesAllowed ? 'new test' : 'try again'}
                </Button>
                { expired &&
                    <Button disabled={!expired} colorScheme="blue" variant="solid" onClick={() => submitUserWpm(warrior, wpm, misses)}>
                        submit
                    </Button>
                }
            </HStack>
            
        </div>
    );
};

export default Practice;
 