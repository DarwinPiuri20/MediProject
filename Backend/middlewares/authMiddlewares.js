const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token");   ///search in header x-auth-token

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);            ///verify token
        req.user = decoded;                                                    ///decoded token
        next();
    } catch (e) {
        res.status(400).json({ message: "Invalid token" });
    }
};