const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./controller/PostsController');

const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://root:root@cluster0-pion5.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', function() {
   console.log("Connected");
});

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

module.exports = app;



