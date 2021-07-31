/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '../../../lib/initSupabase';

export default async (req, res) => {
    let status = res.statusCode;
    // Process a GET request
    if (req.method === 'POST') {
        const { data, error } = await supabase
            .from('warriors')
            .insert([
                { clerkID: `${req.body.clerkID}`, displayName: `${req.body.displayName}` },
            ]);
        if (error) {
            status = 503;
            res.json({ error: error });
        } else {
            status = 200;
            res.json({ data: data });
        }
    } else if (req.method !== 'POST') {
        status = 405;
        res.json({ status: status, data: 'this route only accepts POST requests' });
    } else {
        status = 503;
        res.json({ status: status, data: 'unknown error' });
    }
};

// so the flow here is a user creates an account with clerk then they are redirected to a create account page
// the create account page essentially serves as a way for us to add the clerkid provided by the user object to our supabase table
// the supabase table is where all the users stats keeping authentication seperate.
// so this API takes a clerk user and adds them to a new row in the supabase table with initial values