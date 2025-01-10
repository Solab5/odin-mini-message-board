const { Pool } = require('pg');

// Add this to check if we're getting the DATABASE_URL
console.log('Database URL exists:', !!process.env.DATABASE_URL);
console.log('Connection string:', process.env.DATABASE_URL?.substring(0, 20) + '...');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Add error handler to see more details
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

module.exports = pool;