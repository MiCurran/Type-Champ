import Rankings from '../views/Rankings/Rankings';
import axios from 'axios';
import { GETHIGHSCORES, LOCALURL, PRODURL } from 'constants/API/routes';

const RankingsPage = (props) => (<Rankings {...props} />);

export async function getServerSideProps(context) {
    let warriors = [];
    const fetchHighScores = async () => {
        await axios.get(`${LOCALURL}${GETHIGHSCORES}?type=wpm`)
            .then(res => {
                warriors = res.data.warriors;
                return true;
            })
            .catch(() => {
                console.log('error', true);
            });
    };
    await fetchHighScores();
    return {
        props: {
            warriors,
        }
    };
}

export default RankingsPage;
