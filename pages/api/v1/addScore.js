/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '../../../lib/initSupabase';
import { getAverageOfArray } from 'lib/utils/getAverageOfArray';

export default async (req, res) => {
    let status = res.statusCode;
    // Process a POST request
    if (req.method === 'POST' && req.query.user) {
        const mistakes = req.body.mistakes;
        const tests = req.body.tests;
        const avgwpm = getAverageOfArray(tests);
        const avgmistakes = getAverageOfArray(mistakes);
        console.log(req.body.tests);
        const { data: warriors, error } = await supabase
            .from('warriors')
            .update({ 'tests': tests,
                'mistakes': mistakes,
                'avg-mistakes': avgmistakes,
                'avg-wpm': avgwpm, })
            .match({ id: req.query.user });
        if (error) {
            status = 503;
            res.json({ error: error });
        } else {
            status = 200;
            res.json({ warriors: warriors });
        }
    } else if (!req.query.user) {
        status = 400;
        res.json({ status: status, data: '400 dude: you need to query a user' });
    } else if (req.method !== 'POST') {
        status = 405;
        res.json({ status: status, data: 'this route only accepts POST requests' });
    } else {
        status = 503;
        res.json({ status: status, data: 'unknown error' });
    }
};

// so we dont need a high scores table at all because we can just sort
// the warriors table by avgWPM or avgMistakes