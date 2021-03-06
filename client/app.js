const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const port = 80

app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))