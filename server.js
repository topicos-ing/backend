const express = require('express')
const app = express()
const port = 80

app.get('/api', (req, res) => {res.json({"links": ["link1","link2", "link3"]})})

app.listen(port, () => console.log(`listening on port ${port}`))
