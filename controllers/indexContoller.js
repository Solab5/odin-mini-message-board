const db = require("../db/queries")


async function renderHomePage(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {messages: messages, title: "Mini messageboard"})
}

async function getMessegaDetails(req, res) {
    const messageId = req.params.id;
    const messages = await db.getAllMessages();
    const message = messages[messageId]
    res.render("messageDetails", { message: message});
}

async function addNewMessage(req, res) {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    db.addNewMessage(messageText, messageUser)
    res.redirect("/")
}

module.exports = {
    renderHomePage,
    getMessegaDetails,
    addNewMessage
}