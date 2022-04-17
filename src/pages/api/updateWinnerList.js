const mariadb = require('mariadb');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const pool = mariadb.createPool({
  host: "ssh.synthients.co",
  user: "synthients_cosynthientsdatabase",
  password: "Testing123?!",
  database: "synthients_cosynthientsdatabase",
  connectionLimit: 5,
});

export default async function handler(req, res) {

  if (!req.body) {
    res.status(200).send("No request data detected.")
  }
  else {
    const { input1, input2 } = JSON.parse(req.body)
    let conn;
    try {
  
      conn = await pool.getConnection();

      await prisma.winners.upsert({
        where: {
          address: '0x123456qwerty'
        },
        update: {
          answer1: input1,
          answer2: input2
        },
        create: {
          address: '0x123456qwerty',
          answer1: input1,
          answer2: input2
        }
      })
  
      const winners = await prisma.winners.findMany()
      console.log("++++ table data =>", winners)
      res.status(200).send("Saved successfully.")
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }
}