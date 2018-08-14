import 'mysql'
import { createConnection } from 'typeorm'

createConnection({
	type: 'mysql',
	host: 'db-dev',
	port: 3306,
	username: 'root',
	password: 'dev',
	database: 'dev',
})
