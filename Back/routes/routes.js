var express = require('express');
var router = express.Router();
const controller = require('../controller/controller');

//Déclaration des routes
router.get('/agenda', controller.users)
router.get('/agenda/:id', controller.user)
router.post('/agenda', controller.createUser)
router.put('/agenda/:id', controller.updateUser)
router.delete('/agenda/:id', controller.deleteUSer)

module.exports = router;