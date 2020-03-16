const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://root:root@cluster0-pion5.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
mongoose.connect('mongodb://root:root@localhost:8081', {useNewUrlParser: true})
let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', function() {
    console.log("Connected");
});

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    description: String
});

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;