import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

//connection string of database:
//Sequelize(db name, db user, db password, object-host, dialect(pg, mysql...))
const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
);

export default db