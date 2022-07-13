import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { getRandomWordsPhrase } from '../../lib/utils/getRandomWords';
import { getLetterColors } from '../../lib/utils/getLetterColors';
import axios from 'axios';
import { getMostFrequent } from 'lib/utils/getMostFrequent';
import { getFrequency } from 'lib/utils/getFrequency';

const usePractice = (props) => {
    const warrior = { 'id': 1,
        'experience': 5.83,
        'avg-wpm': 100,
        'tests': [100],
        'clerkID': null,
        'updatedAt': '2021-07-29',
        'displayName': 'Jimmy Crack Corn',
        'avg-mistakes': 2,
        'mistakes': [2] };
    const { user } = props;
    const searchInput = useRef(null);
    const counterInitState = 30;
    const [phrase, setPhrase] = useState(getRandomWordsPhrase());
    const [counter, setCounter] = useState(counterInitState);
    const [startTimer, setStartTimer] = useState(false);
    const [expired, setExpired] = useState(false);
    const [value, setValue] = useState('');
    const valueArray = value.split('');
    const phraseArray = phrase.split('');
    const letterColors = getLetterColors(phraseArray, valueArray);
    const [hits, setHits] = useState(0);
    const [misses, setMisses] = useState(0);
    const [missedLetters, setMissdLetters] = useState([]);
    const [mostFrequentMiss, setMostFrequentMiss] = useState(getMostFrequent(missedLetters, missedLetters.length));
    const [frequencyOfMostFrequentMiss, setFrequencyofMostFrequentMiss] = useState(getFrequency(missedLetters, mostFrequentMiss));
    const [wpm, setWpm] = useState(0);
    const [mode, setMode] = useState('misses');
    const [difficulty, setDifficulty] = useState(1);

    const handleChooseRandomPhrase = () => {
        setPhrase(getRandomWordsPhrase());
        handleReset();
    };

    const missesDifficulty = [15, 5, 0];
    const wpmDifficulty = [40, 70, 100];

    // so we should map these out to buttons?

    const determineWin = (mode, difficulty, score) => {
        //score should be an object {wpm, misses}
        if (mode === 'misses') {
            console.log(missesDifficulty[difficulty] >= score.misses);
            return missesDifficulty[difficulty] >= score.misses;
        }
        if (mode === 'wpm') {
            console.log(wpmDifficulty[difficulty] < score.wpm);
            return wpmDifficulty[difficulty] < score.wpm;
        }


    };
    

    const submitUserWpm = async (user, wpm, mistake) => {
        // so here we should do a get request first in order to get the user object we want from supabase
        const response = await axios.get(`/api/v1/getUserByClerk?user=${user.id}`);
        let tests = response.data.warriors[0].tests;
        let mistakes = response.data.warriors[0].mistakes;
        const warrior = response.data.warriors[0];
        if (tests.length === 0) {
            tests = [wpm];
        } else {
            tests.push(wpm);
        }
        if (mistakes.length === 0) {
            mistakes = [mistake];
        } else {
            mistakes.push(mistake);
        }
        if (user) {
            axios.post(`/api/v1/addScore?user=${warrior.id}`, {
                tests: tests,
                mistakes: mistakes,
            })
                .then(function (response) {
                    console.log(response);
                    // handleReset();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
    // wpm === (all typed characters / 5) / time(minutes)

    const determineWPM = (value, time) => {
        const adjustedTime = (counterInitState / counterInitState) / 2;
        const words = value.length / 5;
        const wpm = Math.floor(words / adjustedTime);
        return wpm;
    };

    const handleValueChange = (value) => {
        const tempMissedLetters = missedLetters;
        const tempVal = value.split('');
        if (tempVal[value.length - 1] === phraseArray[value.length - 1]) {
            const newHits = hits + 1;
            setHits(newHits);
        } else {
            tempMissedLetters.push(phraseArray[value.length - 1]);
            const newMisses = misses + 1;
            setMisses(newMisses);
            setMissdLetters(tempMissedLetters);
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
        setMissdLetters([]);
        setFrequencyofMostFrequentMiss();
        setMostFrequentMiss('');
    };

    const timerHandler = () => {
        if (counter === 1) {
            setExpired(true);
        }
        setWpm(determineWPM(value, counter));
        setCounter(counter - 1);
    };

    useEffect(() => {
        if (startTimer === true && expired === false) {
            searchInput.current.focus();
            const timer =
        counter > 0 && setInterval(() => timerHandler(), 1000);
            return () => clearInterval(timer);
        };
        if (user && expired === true) {
            submitUserWpm(user, wpm, misses);
        }
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
        mode,
        submitUserWpm,
        missedLetters,
        missesDifficulty,
        wpmDifficulty,
        mostFrequentMiss,
        frequencyOfMostFrequentMiss,
        determineWin,
        difficulty,
        setDifficulty,
        setMode

    };
};

export default usePractice;
