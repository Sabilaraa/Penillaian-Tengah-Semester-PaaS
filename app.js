require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// koneksi database PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// setup ejs dan middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

// konfigurasi storage upload
const storage = multer.diskStorage({
  destination: process.env.STORAGE_PATH || 'uploads',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// tampilkan semua data
app.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.render('index', { users: result.rows });
});

// tambah data baru
app.post('/add', upload.single('foto'), async (req, res) => {
  const { nama, email } = req.body;
  const foto = req.file ? req.file.filename : null;
  await pool.query('INSERT INTO users (nama, email, foto) VALUES ($1, $2, $3)', [nama, email, foto]);
  res.redirect('/');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
