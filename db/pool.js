const { Pool } = require('pg');

// Only use dotenv in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
  },
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false
  } : false
});

module.exports = pool;