/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '../../../lib/initSupabase';

// and boom just like that we are linked up with our database

export default async (req, res) => {
// so here we just need to
// await supabase.from('warriors').select('*').order('id', true)
    const { data: todos, error } = await supabase.from('warriors').select('*').order('id', true);
    if (error) {
        console.log('error', error);
    } else {
        console.log(todos);
    }
    res.statusCode = 200;
    res.json({ name: 'This is the test sccores API' });
};