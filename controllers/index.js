 const router = require('express').Router();
 const db = require('../models');
 const withAuth = require('../utils/auth');

 router.get('/', (req, res ) => {
    res.render('homepage');
 });

 router.get('/posts', withAuth, (req, res) => {
   res.send('Welcome to the posts!');
 });

 router.post('/signup', async (req, res) => {
   const newUser = await db.User.create(req.body);
   
   req.session.save(() => {
      req.session.loggedIn = true;
   });

   res.json(newUser)
 });

 module.exports = router;