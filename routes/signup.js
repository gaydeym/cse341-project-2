const router = require('express').Router();
const signupController = require('../controllers/signup');

router.post(
  '/',
  /* 
    #swagger.tags = ['Management System']
  */
  signupController.signupUser
);

module.exports = router;
