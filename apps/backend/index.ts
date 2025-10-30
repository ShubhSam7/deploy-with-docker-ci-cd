import express from "express";
import { prismaClient } from "db/client";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
    const user = await prismaClient.user.findMany()
    res.json({
        msg: "These are the users",
        username: user.username,
        password: user.password
    })
})

app.post("/user", async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return
  }

    const user = await prismaClient.user.create({
    data: {
      username,
      password
    }
  })

  res.json({
    msg: "you are signed up",
    username: user.username,
    password: user.password
  })
    
})

app.listen(8080);