import { Sequelize } from 'sequelize'

const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'cursosead',
  username: 'cursosead',
  password: 'senha1234',
	define: {
    underscored: true
  }
})

export default database