const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (authHeader.split(" ").length !== 2) {
            return res.status(401).send({
                message: "Invalid Token",
                data: null,
            });
        }

        const token = authHeader.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        if (!user) {
            return res.status(401).send({
                message: "Invalid Token",
                data: null,
            });
        }

        req.user = user;

        next();
    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            return res.status(401).send({
                message: "Invalid Token",
                data: null,
            });
        }

        next(error);
    }
}

module.exports = { verifyToken };