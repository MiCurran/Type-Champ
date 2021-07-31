import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const useCreateUser = (props) => {
    const router = useRouter();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [eMessage, setEMessage] = useState('');

   
    const submitCreateUser = (clerkID, displayName) => {
        if (clerkID && displayName) {
            axios.post(`/api/v1/LinkUser`, {
                displayName: displayName,
                clerkID: clerkID,
            })
                .then(function (response) {
                    setSubmitted(true);
                    setTimeout(router.push('/'), 7_000);
                })
                .catch(function (error) {
                    setError(true);
                    setEMessage(error);
                });
        }
    };

    return {
        submitCreateUser,
        submitted,
        setSubmitted,
        error,
        eMessage
    };
};

export default useCreateUser;
