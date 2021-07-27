// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default testScores = (req, res) => {
    res.statusCode = 200;
    res.json({ name: 'This is the test sccores API' });
};