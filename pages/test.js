import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Practice from '../views/Practice/Practice';
import Test from '../views/Test/Test';

const TestPage = (props) => {
    return (
        <>
            <SignedIn>
                <Test {...props}/>
            </SignedIn>
            <SignedOut>
                <p>you must sign in to take a test and save your scores</p>
            </SignedOut>
        </>
    );
};

export default TestPage;
