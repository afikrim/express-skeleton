module.exports = {
  mysql: {
    database: process.env.DB_DATABASE || 'sql_express_skeleton',
    host: process.env.DB_HOST || 'http://127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    dialect: 'mysql',
  },

  mariadb: {
    database: process.env.DB_DATABASE || 'sql_express_skeleton',
    host: process.env.DB_HOST || 'http://127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    dialect: 'mariadb',
  },

  postgres: {
    database: process.env.DB_DATABASE || 'sql_express_skeleton',
    host: process.env.DB_HOST || 'http://127.0.0.1',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '',
    dialect: 'postgres',
  },

  mssql: {
    database: process.env.DB_DATABASE || 'sql_express_skeleton',
    host: process.env.DB_HOST || 'http://127.0.0.1',
    port: process.env.DB_PORT || 1433,
    username: process.env.DB_USERNAME || 'sa',
    password: process.env.DB_PASSWORD || '',
    dialect: 'mssql',
  },
}
