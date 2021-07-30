import { withSession } from '@clerk/clerk-sdk-node';

function handler(req, res) {
    if (req.session) {
        // do something with session.userId
    } else {
        // Respond with 401 or similar
    }
}

export default withSession(handler);