 const router = require('express').Router();
const { request } = require('express');
 const db = require('../models');
 const withAuth = require('../utils/auth');

 router.get('/', (req, res ) => {
    res.render('homepage');
 });

 router.get('/posts', withAuth, (req, res) => {
   res.render('/posts', {
       username: req.session.username
   });
 });

 router.post('/posts', withAuth, async (req, res) => {
   const { body } = req.body;
   const { id } = req.session;

   console.table({body, id});

   const newPost = await db.Post.create({
      user_id: request.session.user_id, 
      body: req.body.body
   });

   res.json(newPost);
 });

 router.post('/signup', async (req, res) => {
   const newUser = await db.User.create(req.body);

   const simpleUser = newUser.get({ plain: true });   
   
   req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      req.session.user_id = simpleUser.id; 

      res.json(newUser)
   });

   
 });

 module.exports = router;