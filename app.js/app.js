const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const urls = require('./urls');


app.get('/', (req, res) => {
  res.send('URL SHORTENER');
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});

app.use("/urls", urls);