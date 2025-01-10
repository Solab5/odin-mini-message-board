const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST || 'junction.proxy.rlwy.net',
  port: process.env.PGPORT || 49650,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test the database connection
(async () => {
  try {
    const client = await pool.connect();
    console.log('Connected successfully to the database');
    client.release();
  } catch (err) {
    console.error('Database connection error:', err.stack);
  }
})();

// Log environment variables status for debugging
console.log('Database Config Status:', {
  host: process.env.PGHOST ? 'set' : 'not set',
  port: process.env.PGPORT ? 'set' : 'not set',
  user: process.env.PGUSER ? 'set' : 'not set',
  database: process.env.PGDATABASE ? 'set' : 'not set',
  password: process.env.PGPASSWORD ? 'set' : 'not set'
});

// Handle idle client errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err.message, err.stack);
});

module.exports = pool;
