var router = require('express').Router()
var Posts = require('../models/posts')

var apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.get('/', async (req, res) => {
    try {
      // Get all post and JOIN with user data
      const postData = await Posts.findAll(
        //   where: {
        //       title
        //   }
      );
      console.log(postData);
      // Serialize data so the template can read it
      const postSer = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        postSer, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/dashboard', (req, res) => {

    if (req.session.logged_in) {
        // go to the DB and get all the posts
        console.log('REQ>session', req.session)

        res.render('dashboard', {
            posts: [{ title: 'one' }, { title: 'yess' }],
            logged_in: req.session.logged_in
        })
    }
    else {
        res.redirect('/')
    }

})

router.get('/login', (req, res) => {

    // go to the DB and get all the posts

    res.render('login');
})

module.exports = router