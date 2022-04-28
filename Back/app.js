const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var router = require('./routes/routes');

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use('/', router);

app.listen(3000,()=>{
    console.log('Server On')
})