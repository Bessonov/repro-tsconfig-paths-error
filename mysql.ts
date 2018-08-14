import mysql from 'mysql'

var connection = mysql.createConnection({
  host     : 'db-dev',
  user     : 'root',
  password : 'dev',
  database : 'dev'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error: any, results: any, fields: any) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
