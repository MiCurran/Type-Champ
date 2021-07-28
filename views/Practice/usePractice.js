import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { getRandomWordsPhrase } from '../../lib/utils/getRandomWords';
import { getLetterColors } from '../../lib/utils/getLetterColors';

const usePractice = (props) => {
    const { user } = props;
    const searchInput = useRef(null);
    const counterInitState = 30;
    const [phrase, setPhrase] = useState(getRandomWordsPhrase())
    const [counter, setCounter] = useState(counterInitState);
    const [startTimer, setStartTimer] = useState(false);
    const [expired, setExpired] = useState(false);
    const [value, setValue] = useState('');
    const valueArray = value.split('');
    const phraseArray = phrase.split('');
    const letterColors = getLetterColors(phraseArray, valueArray);
    const [hits, setHits] = useState(0);
    const [misses, setMisses] = useState(0);
    const [mode, setMode] = useState({difficulty: 2, details: {label: 'medium', missesAllowed: 10}}) // so here we should have mode states 1 = easy 2 = medium 3 = hard

    const handleChooseRandomPhrase = () => {
      setPhrase(getRandomWordsPhrase());
      handleReset();
    };
    
    // wpm === (all typed characters / 5) / time(minutes)

    const determineWPM = (value, time) => {
      const adjustedTime = (counterInitState / counterInitState) / 2 
      const words = value.length / 5;
      const wpm = Math.floor(words / adjustedTime);
      return wpm
    };
    const [wpm, setWpm] = useState(0);

    const handleValueChange = (value) => {
      const tempVal = value.split('')
      if (tempVal[value.length-1] === phraseArray[value.length - 1]) {
        const newHits = hits + 1
        setHits(newHits);
      } else {
        const newMisses = misses + 1
        setMisses(newMisses);
      }
      setValue(value);
    };

    const handleReset = () => {
      setCounter(30);
      setStartTimer(false);
      setExpired(false);
      setValue('');
      setHits(0);
      setMisses(0);
    };

    const timerHandler = () => {
      if (counter === 1){
        setExpired(true);
      }
      setWpm(determineWPM(value, counter));
      setCounter(counter - 1); 
    }; 

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
        startTimer,
        counter,
        wpm,
        expired,
        value,
        searchInput,
        user,
        letterColors,
        hits,
        misses,
        phrase,
        value,
        mode

    };
};

export default usePractice;
