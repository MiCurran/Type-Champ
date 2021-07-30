import { Box, Container, Heading, HStack, Text, VStack, Button, Center } from '@chakra-ui/react';
import { getRandomWordsPhrase } from '../../../lib/utils/getRandomWords';


export const Stats = (props) => {
    const { hits, misses, wpm, phrase } = { ...props };
    const accuracy = Math.floor(((phrase.length - misses) / phrase.length) * 100);
    return (
        <Box width="500px">
            <Box borderWidth="2px" borderRadius="lg" overflow="hidden">
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