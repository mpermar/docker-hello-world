const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('W00t!');
});

app.listen(8080, '0.0.0.0');
console.log("Web server started");
