const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
