const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('Node.js: Hello, Coders!!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
