const express = require('express');
const protectRoute = require('../middlewares/auth.middleware')

const {
    logIn,
    signUp,
    logOut,
} = require('../controllers/auth.controller')

const route = express.Router();

route.post("/login", logIn)
route.post("/signup", signUp)
route.post("/logout", logOut)

module.exports = route