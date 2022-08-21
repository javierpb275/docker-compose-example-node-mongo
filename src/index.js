const express = require('express');

const app = express();

require('./database');

app.listen(3000);
console.log('server is up on port', 3000)