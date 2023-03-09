import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YourStrong@Passw0rd",
  database: "blog",
});
