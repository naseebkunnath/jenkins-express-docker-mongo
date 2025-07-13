const express = require('express');
const app = express();
//C:\Program Files\Common Files\Oracle\Java\javapath
app.get('/', (req, res) => res.send('Hello from CI/CD! This is Naseeb Rahman'));

app.listen(3000, () => console.log('Server running on port 3000'));