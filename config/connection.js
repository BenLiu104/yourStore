const Sequelize = require('sequelize');
const fs = require('fs');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'yourstore-mysqldb.mysql.database.azure.com',
      // host: 'yourstore-db.mysql.database.azure.com',
      dialect: 'mysql',
      port: 3306,
      // dialectOptions: {
      //   ssl: {
      //     ca: 'process.env.MYSQL_CA_CERT',
      //   },
      // },
      ssl: {
        ca: fs.readFileSync('/test/DigiCertGlobalRootCA.crt (1).pem'),
      },
    }
  );
}

module.exports = sequelize;
