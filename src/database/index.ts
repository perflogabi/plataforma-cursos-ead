import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'cursosead_development',
  username: 'postgres',
  password: 'senha1234',
	define: {
    underscored: true
  }
})