const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/route');
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
const Search = require('./models/Bing');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)

app.use('/',routes);

const data = new Search({
    Search,
});

data.save(err=>{
    if (err) {
        res.send("Error Saving");
    }
    res.json(data);
})

app.listen(3000,()=>console.log("Server Runing !!!"))