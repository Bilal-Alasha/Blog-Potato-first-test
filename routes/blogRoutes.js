const express = require('express');
const blogcontroller = require('../controllers/blogControleer')

const router = express.Router();

router.get('/blogs' , blogcontroller.blog_index);

//post handler
router.post('/blogs' , blogcontroller.blog_creat_post);

router.get('/blogs/creat' , blogcontroller.blog_creat_get);


router.get('/blogs/:id' , blogcontroller.blog_details);

router.delete('/blogs/:id' , blogcontroller.blog_delete);


module.exports = router;