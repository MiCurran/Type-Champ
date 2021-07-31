import Head from 'next/head';
import Link from 'next/link';
import styles from './Practice.module.scss';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { useEffect, useState, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import Image from 'next/image';
import usePractice from './usePractice';
import { Stats } from './components/stats';
import { Box, Heading, Button, VStack, HStack, Text } from '@chakra-ui/react';
import { MdReplay } from 'react-icons/md';
import { useDisclosure } from '@chakra-ui/react';
import { ModeModal } from './components/modeModal';

const Practice = (props) => {
    const { searchInput,
        startTimer,
        counter,
        wpm,
        expired,
        value,
        handleChooseRandomPhrase,
        handleValueChange,
        setStartTimer,
        letterColors,
        hits,
        misses,
        mode,
        submitUserWpm,
        missedLetters,
        mostFrequentMiss,
        frequencyOfMostFrequentMiss,
        determineWin,
        difficulty,
        setDifficulty,
        setMode,
        user } = usePractice(props);
    const { isOpen, onOpen, onClose } = useDisclosure();
    
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
                            src={determineWin(mode, difficulty, { wpm: wpm, misses: misses }) ? '/win.svg' : '/lose.svg'}
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
                    : (
                        <Stats
                            mostFrequentMiss={mostFrequentMiss}
                            frequencyOfMostFrequentMiss={frequencyOfMostFrequentMiss}
                            missedLetters={missedLetters}
                            user={user}
                            hits={hits}
                            misses={misses}
                            wpm={wpm}
                            phrase={value}
                        />
                    )
                }
            </Box>
            <HStack>
                {!expired &&
                    <Button colorScheme="blue" variant="outline" onClick={() => setStartTimer(true)}>start!</Button>
                }
                <Button leftIcon={<MdReplay />}colorScheme="blue" variant="solid" onClick={() => handleChooseRandomPhrase()}>
                    {expired && !determineWin(mode, difficulty, { wpm: wpm, misses: misses }) ? 'try again' : 'new test'}
                </Button>
                { expired && user &&
                    <Button disabled={!expired} colorScheme="blue" variant="solid" onClick={() => submitUserWpm(user, wpm, misses)}>
                        submit
                    </Button>
                }
                
            </HStack>
            <HStack>
                <Button onClick={onOpen}>Game Settings</Button>
            </HStack>
            <ModeModal
                isOpen={isOpen}
                onClose={onClose}
                setDifficulty={setDifficulty}
                mode={mode}
                difficulty={difficulty}
                setMode={setMode}
            />
        </div>
    );
};

export default Practice;
 