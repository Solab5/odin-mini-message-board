const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  


indexRouter.get('/', (req, res) => 
    res.render("index", {messages: messages, title: "Mini messageboard"})
);

indexRouter.get('/message/:id', (req, res) => {
    const messageId = req.params.id;
    const message = messages[messageId]

    res.render("messageDetails", { message: message});
});

indexRouter.post('/new', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({ text: messageText, user: messageUser, added: new Date() });

    res.redirect("/")

});



module.exports = indexRouter;