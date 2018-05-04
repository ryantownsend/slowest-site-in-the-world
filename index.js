const express = require('express')

app.use(express.static('public'))

app.listen(PORT, () => console.log(`App booted on port ${PORT}`))
