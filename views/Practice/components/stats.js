import { getRandomWordsPhrase } from "../../../lib/utils/getRandomWords";


export const Stats = (props) => {
    const { hits, misses, wpm, phrase } = {...props};
    return (
        <container style={{width: '90vw'}}>
            <h3>{phrase.length - misses}/ {phrase.length} total</h3>
            <h3>{wpm} wpm</h3>
        </container>
    );
}