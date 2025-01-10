const { Router } = require("express");

const indexRouter = Router();
const { getMessegaDetails, renderHomePage, addNewMessage } = require("../controllers/indexContoller")

  
indexRouter.get('/', renderHomePage);

indexRouter.get('/message/:id', getMessegaDetails);

indexRouter.post('/new', addNewMessage);



module.exports = indexRouter;