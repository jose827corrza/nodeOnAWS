const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello world from Express on EC2'))

app.listen(3000);
console.log('Server en puerto 3000')