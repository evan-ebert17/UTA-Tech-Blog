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

router.delete('/:id', async (req, res) => {
  try {
    const postsData = await Posts.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!postsData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;