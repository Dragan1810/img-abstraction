const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/route');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/',routes);

app.listen(3000,()=>console.log("Server Runing !!!"))