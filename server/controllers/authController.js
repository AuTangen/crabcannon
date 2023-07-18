const router = require('express').Router();
const User = require('../models/user');


router.post('/login', async (req, res) => {
  const user_data = req.body;

  const user = await User.findOne({
    where: {
      email: user_data.email
    }
  });

  if (!user) return res.redirect('/signup');

  const valid_pass = await user.validatePass(user_data.password);

  if (!valid_pass) return res.redirect('/login');

  req.session.user_id = user.id;

  res.send(user);
});

router.post('/signup', async (req, res) => {
  const user_data = req.body;

  try {
    const user = await User.create(user_data);
    console.log(user)
    req.session.user_id = user.id;
    console.log("userID" + req.session.user_id)
    res.send(user)
    // res.redirect('/home');
  } catch (err) {
    console.log(err)
    console.log(req.body)
    // res.redirect('/home');
  }
});

router.get('/authenticated', async (req, res) => {
  const user_id = req.session.user_id;
  const user_data = req.body;


  if (!user_id) return res.send({user: null})

  const user =await User.findOne({
    where: {
      id: user_id
    }
  });
  
  console.log(user)
  res.send({ user: user })
})

router.get('/auth/logout', (req, res) => {
  req.session.destroy();

  res.redirect('/');
});

module.exports = router;