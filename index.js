const express = require("express")
const request = require("request")
const app = express()

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

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
