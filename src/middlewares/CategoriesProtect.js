const CategoriesService = require('../services/CategoriesSevices');
const { verifyToken } = require('../helpers/token');

const CategoriesProtect = async (req, res, next) => {
    const token = req.headers.authorization 
    ? req.headers.authorization.split(" ")[1]
    : null;

    if (!token) {
        return res.status(401).json({ error: "You need a token "});

    }

    try {
        const decoded = await verifyToken(token);
        const exists = await CategoriesService.exists(id);
        if (!exists) {
            res.status(403).json({ error: "Invalid token" });
            next();
        }
        req.userID = id;
        next();
    } catch (error) {
        res.status(403).json({error});
    }
};

module.exports = {
    CategoriesProtect,
}