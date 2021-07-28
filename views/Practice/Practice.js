import Head from 'next/head';
import Link from 'next/link';
import styles from './Practice.module.scss';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { useEffect, useState, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import Image from 'next/image';
import usePractice from './usePractice';
import { Stats } from './components/stats';
import { Box, Heading, Button, Text, Center, VStack, List, ListItem, ListIcon, OrderedList, HStack, } from '@chakra-ui/react';
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
        user } = usePractice(props);
    
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
                    : <section style={{ width: '90vw' }}><Stats hits={hits} misses={misses} wpm={wpm} phrase={value}/></section>
                }
            </Box>
            <HStack>
                <Button colorScheme="blue" variant="outline" onClick={() => setStartTimer(!startTimer)}>start/stop timer</Button>
                <Button leftIcon={<MdReplay />} colorScheme="blue" variant="ghost" onClick={() => handleReset()}>reset</Button>
                <Button colorScheme="blue" variant="solid" onClick={() => handleChooseRandomPhrase()}>new test</Button>
            </HStack>
            
        </div>
    );
};

export default Practice;
 