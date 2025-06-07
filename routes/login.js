const router = require('express').Router();
const loginController = require('../controllers/login');

router.post(
  '/',
  /* 
    #swagger.tags = ['Management System']
  */
  loginController.loginUser
);

module.exports = router;
