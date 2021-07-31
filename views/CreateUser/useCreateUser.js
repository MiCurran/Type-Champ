import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const useCreateUser = (props) => {
    const router = useRouter();
   
    const submitCreateUser = (clerkID, displayName) => {
        if (clerkID && displayName) {
            axios.post(`/api/v1/LinkUser`, {
                displayName: displayName,
                clerkID: clerkID,
            })
                .then(function (response) {
                    console.log(response);
                    router.push('/');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    return {
        submitCreateUser
    };
};

export default useCreateUser;
