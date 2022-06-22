import Head from 'next/head';
import styles from './Home.module.scss';
import Practice from '../Practice/Practice';

const Home = ({ ...props }) => (
    <div className={styles.container}>
        <Head>
            <title>Type Warrior</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
        </Head>
            <Practice />
    </div>
);

export default Home;