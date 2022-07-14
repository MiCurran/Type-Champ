import Head from 'next/head';
import Link from 'next/link';
import styles from './Practice.module.scss';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import usePractice from './usePractice';
import { Stats } from './components/stats';
import { Box, Heading, Button, VStack, HStack, Text, IconButton } from '@chakra-ui/react';
import { MdReplay } from 'react-icons/md';
import { useDisclosure } from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaWindowClose} from 'react-icons/fa';
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
        wpmDifficulty,
        missesDifficulty,
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
            <Heading textColor="purple.200" as="h3">Fight the clock or fight mistakes!</Heading>
            <Box>
            <VStack
               bgGradient= {`linear(to-r, purple.100, purple.300)`}
                p={2}
                rounded={'2xl'}
                position={'absolute'}
                left={'0.5'}
            >
                {isOpen === false
                ?(
                    <Button 
                        _hover={{bgColor: 'transparent', fontWeight: 700}} 
                        variant={'ghost'} 
                        onClick={onOpen}
                        leftIcon={<GiHamburgerMenu/>}
                    >
                        {"  "} Settings
                    </Button>)
                :(
                    <>
                    <IconButton bg={'transparent'} _hover={{bgColor: 'transparent'}} icon={<FaWindowClose />} onClick={onClose}></IconButton>
                        <VStack>
                            <Heading> Game Mode</Heading>
                            <HStack>
                                <Text onClick={() => setMode('wpm')} cursor="pointer" textColor={mode === 'wpm' ? 'black' : 'gray'}
                                    fontWeight={mode === 'wpm' ? '700' : '500'}
                                >
                                    wpm
                                </Text>
                                <Text onClick={() => setMode('misses')} cursor="pointer" textColor={mode === 'misses' ? 'black' : 'gray'}
                                    fontWeight={mode === 'misses' ? '700' : '500'}
                                >
                                    accuracy
                                </Text>
                            </HStack>
                        </VStack>
                        <VStack>
                            <Heading>Difficulty</Heading>
                            <HStack>
                                <Text cursor="pointer"
                                    onClick={() => setDifficulty(0)} textColor={difficulty === 0 ? 'black' : 'gray'}
                                    fontWeight={difficulty === 0 ? '700' : '500'}
                                >
                                    Easy
                                </Text>
                                <Text cursor="pointer"
                                    onClick={() => setDifficulty(1)} textColor={difficulty === 1 ? 'black' : 'gray'}
                                    fontWeight={difficulty === 1 ? '700' : '500'}
                                >
                                    Medium
                                </Text>
                                <Text cursor="pointer"
                                    onClick={() => setDifficulty(2)} textColor={difficulty === 2 ? 'black' : 'gray'}
                                    fontWeight={difficulty === 2 ? '700' : '500'}
                                >
                                    Hard
                                </Text>
                            </HStack>
                        </VStack>
                        </>)}
                    </VStack>
            </Box>
            {!expired && <Heading as="h3" color={'yellow.200'}><span className={styles.timer}>{counter}</span></Heading>}
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
                            width="100"
                            height="100"
                            alt="Win Image"
                        />
                    </VStack>
                )
          
            }
            <textarea
                ref={searchInput}
                style={{ opacity: 0.01 }}
                autoFocus
                tabIndex={!expired ? 1 : 3}
                disabled={expired}
                value={value}
                onKeyDown={() => setStartTimer(true)}
                onChange={(e) => handleValueChange(e.target.value)}
            />
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
                    <Button  w={'xs'} rounded={'2xl'} border={'2px solid #E9D8FD'} bgGradient='linear(to-r, purple.100, purple.300)'
                    bgClip='text'variant={'outline'} onClick={() => setStartTimer(true)}>Start!</Button>
                }
                <Button
                w={'xs'}
                    rounded={'2xl'}
                    tabIndex={expired ? 1 : 3}
                    leftIcon={
                        <MdReplay />
                    }
                    bgGradient= {`linear(to-r, purple.100, purple.300)`}
                    variant="solid"
                    onClick={() => handleChooseRandomPhrase()}
                >
                    {expired && !determineWin(mode, difficulty, { wpm: wpm, misses: misses }) ? 'Try Again' : 'New test'}
                </Button>
                { expired && user &&
                    <Button 
                        rounded={'2xl'}
                        disabled={!expired} colorScheme="purple" variant="solid" onClick={() => submitUserWpm(user, wpm, misses)}>
                        submit
                    </Button>
                }
            </HStack>
        </div>
    );
};

export default Practice;
 