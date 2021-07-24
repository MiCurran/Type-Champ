import randomWords  from 'random-words';

export const getRandomWordsArray = (amountOfWordsWeWant) => randomWords({exactly: amountOfWordsWeWant = 50, maxLength: 6});

export const getRandomWordsPhrase = (amountOfWordsWeWant) => randomWords({exactly: amountOfWordsWeWant = 50, maxLength: 6, join: ' '});