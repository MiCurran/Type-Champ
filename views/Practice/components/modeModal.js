import { Box, Container, Heading, HStack, Text, VStack, Button, Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton } from '@chakra-ui/react';


export const ModeModal = (props) => {
    const { isOpen, onClose, mode, difficulty, setDifficulty, setMode } = { ...props };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Game Settings</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
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
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};