import { Box, Button, Heading, Text, Center, VStack, HStack, List, ListItem, ListIcon, OrderedList, } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

const Rankings = (props) => {

    return (
        <VStack backgroundColor="gray" style={{ minHeight: '100vh' }}>
            <Head>
                <title>High Scores</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>
            <Box margin="50px">
                <VStack>
                    <Image
                        src="/ranking.svg"
                        width="150"
                        height="150"
                        alt="hourglass"
                    />
                    <Heading as="h1">High Scores</Heading>
                </VStack>
            </Box>
            <HStack margin="5">
                <VStack>
                    <Heading>
                        <Image
                            src="/esports.svg"
                            width="50"
                            height="50"
                            alt="hourglass"
                        />
                        Today's Tip Top Typer
                        <Image
                            src="/esports.svg"
                            width="50"
                            height="50"
                            alt="hourglass"
                        />
                    </Heading>
                    <Heading>
                        <Image
                            src="/medal.svg"
                            width="25"
                            height="25"
                            alt="hourglass"
                        />
                        {props.warriors[0].displayName}
                    </Heading>
                </VStack>
            </HStack>
            <VStack>
                <OrderedList
                    paddingTop="4"
                >
                    {props.warriors &&
                     props.warriors.map((warrior, index) => {
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
            </VStack>
        </VStack>
    );
};

export default Rankings;
 