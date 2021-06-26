const jwt = require('jsonwebtoken');

const secret = 'mysecretshshhhhh';
const expiration = '2h';

module.exports = {
    signToken: function ({ username, _id }) {
        const payload = { username, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // seperate "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
                .split(' ')
                .pop()
                .trim();
        }

        // if no token, return request object as is
        if (!token) {
            return req;
        }

        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid Token');
        }

        // return updated request object
        return req;
    }
};