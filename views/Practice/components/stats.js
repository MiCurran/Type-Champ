import { Box, Container, Heading, HStack, Text, VStack, Button, Center } from '@chakra-ui/react';


export const Stats = (props) => {
    const { hits, misses, wpm, phrase, user, missedLetters, mostFrequentMiss, frequencyOfMostFrequentMiss } = { ...props };
    const accuracy = Math.floor(((phrase.length - misses) / phrase.length) * 100);
    return (
        <Box width="500px" >
            <Box
                px={10}
                py={4}
                bgColor={'whiteAlpha.700'}
                borderWidth="2px" borderRadius="lg" overflow="hidden">
                <Center><Heading as="h2">Stats</Heading></Center>
                <Box width="100%">
                    <VStack alignItems="start">
                        <Text>Correct characters:</Text>
                        <Heading>
                            {phrase.length - misses}/ {phrase.length}
                        </Heading>
                    </VStack>
                    <VStack alignItems="start">
                        <Text>WPM:</Text>
                        <Heading>{wpm} wpm</Heading>
                    </VStack>
                    <VStack alignItems="start">
                        <Text>Accuracy</Text>
                        <Heading>{accuracy} %</Heading>
                    </VStack>
                </Box>
            </Box>
        </Box>
        
    );
};