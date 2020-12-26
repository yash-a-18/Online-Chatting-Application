const express = require('express');
var appRoutes = require("./routes/app");
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
const PORT = 4000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const url = 'mongodb://localhost/chatappdb'
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log("database connected");
})



var io = require('socket.io')(3000);
io.on('connection', socket => {
    console.log("new connection...")

    socket.on('join', function(data) {
        socket.join(data.roomName);
        console.log(data.firstname + ', you are Online chatting with ' + data.roomName);
        socket.emit('connected to chat', {
            firstname: data.firstname,
            message: 'Chatbot here!! You are connected with ' + data.chatName + '.'
        })
    })

    socket.on('message', function(data) {
        io.in(data.roomName).emit('new message', { firstname: data.firstname, message: data.message })
    })
});

app.use('/users', appRoutes);
app.get('/', (req, res) => {
    res.send("hey yash");
});
app.listen(PORT, () => {
    console.log("running server on port " + PORT);
})