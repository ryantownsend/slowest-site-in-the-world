const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// serve static files from the public folder
app.use(express.static('public'))

// listen on the defined port
app.listen(PORT, () => console.log(`App booted on port ${PORT}`))
