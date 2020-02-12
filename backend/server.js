const express = require('express');
const cors = require('cors');
const app = express();
const apiPort = process.env.PORT || 5000;
const mongoose = require('mongoose');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

const toDoRouter = require('./routes/todos');

app.use('/todos', toDoRouter);


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
