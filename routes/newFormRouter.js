const { Router } = require("express");
const createNewForm = require("../controllers/newFormController");

const newFormRouter = Router();

newFormRouter.get('/', createNewForm);

module.exports = newFormRouter;