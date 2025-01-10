#! /usr/bin/env node

const { Client } = require("pg");


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added DATE
);

INSERT INTO messages (text, username, added) 
VALUES
  ('Hi There', 'Amando', CURRENT_DATE),
  ('Hello There', 'Charles', CURRENT_DATE)
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://rtv-lpt-127:rtv-lpt-127@localhost:5432/messages_db",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
