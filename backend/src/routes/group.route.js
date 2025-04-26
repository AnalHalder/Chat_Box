const express = require('express');
const protectRoute = require('../middlewares/auth.middleware');

const route = express.Router()

const { createGroup, deleteGroup, renameGroup, getGroupsByUser } = require('../controllers/group.controller');

route.post("/creategroup", protectRoute, createGroup)
route.delete("/deletegroup", protectRoute, deleteGroup)
route.patch("/renamegroup", protectRoute, renameGroup)
route.get("/getGroupsByUser", protectRoute, getGroupsByUser)

module.exports = route