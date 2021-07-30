import { SignedIn } from '@clerk/clerk-react';
import CreateUser from '../views/CreateUser/CreateUser';
import { useUser } from '@clerk/clerk-react';
import { WithUser } from '@clerk/clerk-react';
const CreateUserPage = (props) => {
    return (
        <SignedIn><CreateUser /></SignedIn>
    );
};


export default CreateUserPage;
