const { Pool } = require('pg');

require("dotenv").config();

const pool = new Pool({
  host: process.env.PGHOST ,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;

