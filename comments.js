// Create web server
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

//Handle requests to /comments
router.get('/', commentsController.comments_list);
router.get('/create', commentsController.comments_create_get);
router.post('/create', commentsController.comments_create_post);
router.delete('/:id/delete', commentsController.comments_delete_get);
router.patch('/:id/update', commentsController.comments_update_post);

