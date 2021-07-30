/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '../../../lib/initSupabase';

// and boom just like that we are linked up with our database

export default async (req, res) => {
// so here we just need to
// await supabase.from('warriors').select('*').order('id', true)
    if (req.method === 'GET') {
    // Process a GET request
        const { data: warriors, error } = await supabase.from('warriors').select('*').order('id', true);
        if (error) {
            console.log('error', error);
        } else {
            console.log(warriors);
        }
        res.statusCode = 200;
        res.json({ warriors: warriors });
    } else {
    // Handle any other HTTP method
        res.statusCode = 404;
        res.json({ status: res.statusCode, data: '404 dude' });
    }
};