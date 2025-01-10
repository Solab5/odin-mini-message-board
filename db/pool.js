const { Pool } = require('pg');

const pool = new Pool({
  host: 'junction.proxy.rlwy.net',
  port: 49650,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false
  }
});

// Add error handler to debug connection issues
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

// Add this to check our environment variables
console.log('Database config:', {
  host: 'junction.proxy.rlwy.net',
  port: 49650,
  user: process.env.PGUSER ? 'set' : 'not set',
  database: process.env.PGDATABASE ? 'set' : 'not set',
  password: process.env.PGPASSWORD ? 'set' : 'not set'
});

module.exports = pool;