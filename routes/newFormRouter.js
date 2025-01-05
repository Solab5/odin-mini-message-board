const { Router } = require("express");

const newFormRouter = Router();

newFormRouter.get('/', (req, res) => 
    res.render("form"));

module.exports = newFormRouter;