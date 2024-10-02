function log (req, res, next) {
    console.log("Logger yozish ..");
    next()
};

module.exports = log;