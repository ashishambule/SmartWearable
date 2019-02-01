const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}))

var port = 3000;

const mongoDB = "mongodb://localhost/project";
mongoose.set('useCreateIndex', true)
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

mongoose.connection.on("connection", () => {
    console.log("Connected to DB: " + mongoDB);
});

mongoose.connection.on("Error", () => {
    console.log("Connection error: " + mongoDB);
});

var user = require('./routes/userRoutes')
app.use('/users', user);

var device = require('./routes/deviceRoutes')
app.use('/devices', device);

app.get('*', (req, res) => {
    res.send('Page Not Found');
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
});	
