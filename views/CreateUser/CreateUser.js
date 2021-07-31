import Head from 'next/head';
import { useUser } from '@clerk/clerk-react';
import { Button, Heading, Input, VStack, Alert,
    AlertIcon,
    AlertTitle,
    CloseButton,
    AlertDescription, } from '@chakra-ui/react';
import { useState } from 'react';
import useCreateUser from './useCreateUser';

const CreateUser = ({ ...props }) => {
    const user = useUser();
    const [displayName, setDisplayName] = useState('');
    const { submitCreateUser, submitted, error, eMessage } = useCreateUser(props);

    return (
        <VStack backgroundColor="gray" className="container" style={{ minHeight: '100vh' }}>
            {submitted && <Alert status="success">
                <AlertIcon />
                <AlertTitle mr={2}>Success</AlertTitle>
                <AlertDescription>Your display name has been set</AlertDescription>
                <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
            }
            {error && <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Error</AlertTitle>
                <AlertDescription>There was an error creating your account <br/> {eMessage}</AlertDescription>
                <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
            }
            <Head>
                <title>Type Warrior</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>
            <VStack marginY="20" backgroundColor="gray.400" border="2px solid" borderRadius="10" padding="10">
                <Heading as="h3">Choose a display name</Heading>
                <Input fontWeight="500" fontSize="1.2rem" onBlur={(e) => setDisplayName(e.target.value)}></Input>
                {/* <Button onClick={() => console.log(user.id)}>log</Button> */}
                <Button onClick={() => submitCreateUser(user.id, displayName)}>
                    Choose!
                </Button>
            </VStack>
        </VStack>
    );
};
  
export default CreateUser;