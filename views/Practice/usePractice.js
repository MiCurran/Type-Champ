import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

const usePractice = () => {
    const searchInput = useRef(null);
    const router = useRouter();
    const counterInitState = 30;
    const phrases = ['the quick brown fox', 'the next sentence thing would go here and then',
    `Consider this variable declaration: const element = <h1>Hello, world!</h1>;
    This funny tag syntax is neither a string nor HTML.
    It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
    JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.
    `,
    'Fixing mistakes not only messes up the typists rhythm and likely causes brief pauses, but function keys like the delete key take time to press and do not count as a keyed entry. This means that the time penalty is already built into the process of correcting a mistake. An additional time penalty on top of the inherent time penalty discourages the typist from correcting their mistakes in the first place. While typists should be encouraged to avoid mistakes at all costs, they should also be encouraged and not discouraged from fixing mistakes as they are typing. Errors left in uncorrected are much more devastating and undesirable than errors fixed immediately while typing. '];

    const [phrase, setPhrase] = useState(phrases[0])
    const [counter, setCounter] = useState(counterInitState);
    const [startTimer, setStartTimer] = useState(false);
    const [expired, setExpired] = useState(false);
    const [value, setValue] = useState('');
    const valueArray = value.split('');
    const phraseArray = phrase.split('');

    const randomIntFromInterval = (min, max) => { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleChooseRandomPhrase = () => {
      const rndInt = randomIntFromInterval(0, (phrases.length - 1))
      setPhrase(phrases[rndInt]);
      handleReset();
    };
    
    // wpm === (all typed characters / 5) / time(minutes)

    const determineWPM = (value, time) => {
      const adjustedTime = (counterInitState / counterInitState) / 2 
      const words = value.length / 5;
      const wpm = words / adjustedTime;
      return wpm
    };
    const [wpm, setWpm] = useState(0);

    const handleValueChange = (value) => {
      setValue(value);
    };

    const handleReset = () => {
      setCounter(30);
      setStartTimer(false);
      setExpired(false);
      setValue('');
    };

    const timerHandler = () => {
      if (counter === 1){
        setExpired(true);
      }
      setWpm(determineWPM(value, counter));
      setCounter(counter - 1); 
    }; 

    // if the we have a value at the index return red or green 
    // if we havent gotten a value there yet it should be gray
    // this is in the prhrase map
    // if (value[index] === letter ){ return the colored span}

    useEffect(() => {
      if (startTimer === true && expired === false){ 
        searchInput.current.focus();
      const timer =
        counter > 0 && setInterval(() => timerHandler(), 1000);
      return () => clearInterval(timer)};
    }, [counter, startTimer]);

    return {
        counterInitState,
        phrases,
        setStartTimer,
        handleValueChange,
        handleReset,
        setStartTimer,
        handleChooseRandomPhrase,
        valueArray,
        phraseArray,
        startTimer,
        counter,
        wpm,
        expired,
        value,
        searchInput

    };
};

export default usePractice;
