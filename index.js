const express = require("express")
const request = require("request")
const cors = require("cors")
const app = express()

app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/", (req, res) => {
  const url = req.query.url
  request({ url: url }, (err, response, body) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.json(JSON.parse(body))
    }
  })
})

app.post("/", (req, res) => {
  const url = req.query.url
  const body = JSON.stringify(req.body)
  const options = {
    url: url,
    method: "POST",
    body: body,
    headers: { "Content-Type": "application/json" },
  }
  request(options, (err, response, body) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.json(JSON.parse(body))
    }
  })
})

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
