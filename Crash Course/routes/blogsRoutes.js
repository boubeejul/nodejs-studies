const express = require('express');
const controller = require('../controllers/blogsController')

const router = express.Router();

router.get('/create', controller.blogsCreateGet);
  
router.post('/create', controller.blogsCreatePost);

module.exports = router;