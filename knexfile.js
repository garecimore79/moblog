import "dotenv/config"

export default {
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    database: process.env
      .DB_DATABASE,
    password:"GTw#h0$xwG&Qgm#1azKgtNMSZ5USIhYKRiI^YVw*QGjJVJ45^9-=!",

  }
}