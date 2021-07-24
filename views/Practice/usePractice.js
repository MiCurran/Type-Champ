import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { getRandomWordsPhrase } from '../../lib/utils/getRandomWords';

const usePractice = () => {
    const searchInput = useRef(null);
    const router = useRouter();
    const counterInitState = 30;
    const [phrase, setPhrase] = useState(getRandomWordsPhrase())
    const [counter, setCounter] = useState(counterInitState);
    const [startTimer, setStartTimer] = useState(false);
    const [expired, setExpired] = useState(false);
    const [value, setValue] = useState('');
    const valueArray = value.split('');
    const phraseArray = phrase.split('');

    const handleChooseRandomPhrase = () => {
      setPhrase(getRandomWordsPhrase());
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
      // we need to also check here if the last typed character of value 
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
