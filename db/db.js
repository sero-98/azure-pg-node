const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const configg = {
  host: process.env.HOST,
  user: process.env.USER,     
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 5432,
  ssl: true
}

// ==> Conexão com a Base de Dados (PostgreSQL)
const pool = new Pool(configg);

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};