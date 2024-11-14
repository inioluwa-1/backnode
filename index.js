const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});