const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./controller/PostsController');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/v0.1/status', (req, res) => {
   res.send({
      status: 'ok '
   })
});

app.use((req, resp, next) => {
   console.log(req.url);
   next();
});
app.use(bodyParser.json());
app.use('/api/v0.1/posts', postRoutes);
app.listen(port, () => {
   console.log(`server started on ${port} port`);
});




