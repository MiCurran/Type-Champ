import randomWords  from 'random-words';

export const getRandomWordsArray = (amountOfWordsWeWant) => randomWords(amountOfWordsWeWant = 50);

export const getRandomWordsPhrase = (amountOfWordsWeWant) => getRandomWordsArray(amountOfWordsWeWant = 50).join(' ');