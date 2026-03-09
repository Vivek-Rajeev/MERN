const express = require('express');
const { deleteController, putController, postController, getController } = require('../controllers/egController');

const egRouters=express.Router();

egRouters.get('/',getController)
egRouters.post('/',postController)
egRouters.put('/',putController)
egRouters.delete('/',deleteController)

module.exports = egRouters;