const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require ("body-parser");
const cors = require("cors");

const db = require('./keys').mongoURI;

const mongoose = require("mongoose")

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.use('/cities', require('./routes/cities'))
app.use('/itineraries', require('./routes/itineraries'))
app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))

mongoose.connect(db, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true, 
    dbName: "mernproject" })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));