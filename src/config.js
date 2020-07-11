const { PORT, NODE_ENV, DB_URL, API_TOKEN } = process.env;

module.exports = {
  PORT: PORT || 8000,
  NODE_ENV: NODE_ENV || 'development',
  DB_URL: DB_URL,
  API_TOKEN: API_TOKEN
}