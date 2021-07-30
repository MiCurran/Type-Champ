import { Box, Button, Heading, Text, Center, VStack, List, ListItem, ListIcon, OrderedList, } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

const Rankings = (props) => {

    return (
        <VStack>
            <Head>
                <title>Type Warrior Rankings</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>
            <Box>
                <Center>
                    <Heading as="h1">Type Warrior</Heading>
                </Center>
                <Text fontSize="lg">Fight the clock or fight mistakes!</Text>
            </Box>
            <VStack>
                <Image
                    src="/ranking.svg"
                    width="100"
                    height="100"
                    alt="hourglass"
                />
                <Heading as="h2">Rankings</Heading>
            </VStack>
            <VStack>
                <OrderedList
                    paddingTop="4"
                >
                    {props.warriors &&
                     props.warriors.map(warrior => {
                         return (
                             <ListItem
                                 key={warrior.id}
                             >
                                 <span>{warrior[`avg-wpm`]}</span>
                                 {warrior.displayName}
                             </ListItem>
                         );
                     })
                    }
                </OrderedList>
                <Button onClick={() => console.log(props)}>log</Button>
            </VStack>
        </VStack>
    );
};

export default Rankings;
 