import Head from 'next/head';
  
const CreateUser = ({ ...props }) => (
    <div className="container">
        <Head>
            <title>Type Warrior</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
        </Head>
        <div>
            create user page
        </div>
    </div>
);
  
export default CreateUser;