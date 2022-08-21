const express = require('express');
const indexRouter = require('./routes/index.routes')

const app = express();

require('./database');

app.use('/', indexRouter)

app.listen(3000);
console.log('server is up on port', 3000)