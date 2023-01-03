 module.exports = (req, res, next) => {
    if (!req.session.loggedIn) { 
        res.redirect('/');
    } else {
        next();
    }
};