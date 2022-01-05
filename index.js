const express = require("express")
const cors = require("cors")
const axios = require("axios")
const request = require("request")
const app = express()

app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/", async (req, res) => {
  const url = req.query.url
  try {
    const response = await axios.get(url)
    res.json(response.data)
  } catch (err) {
    console.log("error", err)
  }
})

app.post("/", async (req, res) => {
  const url = req.query.url
  const ggid = req.headers["x-torre-ggid"]
  try {
    const response = await axios.post(url, req.body, {
      headers: {
        "x-torre-ggid": ggid,
      },
    })
    res.json(response.data)
  } catch (err) {
    console.log("error", err)
  }
})

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
