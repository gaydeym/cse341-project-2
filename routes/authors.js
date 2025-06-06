const router = require('express').Router();
const authorsController = require('../controllers/authors');

router.get(
  '/',
  /* 
    #swagger.tags = ['Authors']
  */
  authorsController.fetchAuthors
);

module.exports = router;
