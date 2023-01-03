 module.exports = (req, res) => {
    if (!req.session.loggedIn) { 
        res.redirect('/');
    } else {
        next();
    }
};