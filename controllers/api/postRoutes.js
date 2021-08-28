const router = require('express').Router();
const Posts = require('../../models/posts');

router.post('/', async (req, res) => {
  try {
    const postdata = await Posts.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.session.user_id
    });
    res.json(postdata)

  } catch (err) {
      console.log('ERR!!!', err)
    res.status(400).json(err);
  }
});

module.exports = router;