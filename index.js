const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'database',
  database: 'app_db',
  password: 'postgres',
  port: 5432,
});

app.get('/api/message', async (req, res) => {
  const result = await pool.query('SELECT message FROM greetings LIMIT 1');
  res.json({ message: result.rows[0].message });
});

app.listen(4000, () => console.log('Backend running on port 4000'));
