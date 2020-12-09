require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: 'HomeSchema',
});

// eslint-disable-next-line no-unused-vars
pool.on('error', (err, client) => {
  console.error('Error: ', err);
});

module.exports = {
  pool,
};