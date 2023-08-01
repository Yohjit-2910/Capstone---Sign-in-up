const express = require('express');
const app = express();
const port = 5000;
const base = `${__dirname}/web`;
app.use(express.static('web'));

app.get('/', (req, res) => {
    res.sendFile(`${base}/index.html`);
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });