const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows
} 

async function addNewMessage(text, username) {
    await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, CURRENT_DATE)", [text, username]);
}

module.exports = {
    getAllMessages,
    addNewMessage
}