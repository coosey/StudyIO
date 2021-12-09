const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;
const router = require('./router/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json());
app.use(cors());

app.use('/api/', router);


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})