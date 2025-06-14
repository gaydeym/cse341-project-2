const router = require('express').Router();
const authorsController = require('../controllers/authors');

router.get(
  '/',
  /* 
    #swagger.tags = ['Authors']
  */
  authorsController.fetchAuthors
);

router.post(
  '/',
  /* 
    #swagger.tags = ['Authors']
  */
  authorsController.addAuthor
);

router.delete(
  '/:_id',
  /* 
    #swagger.tags = ['Authors']
  */
  authorsController.validateId,
  authorsController.deleteAuthor
);

module.exports = router;
