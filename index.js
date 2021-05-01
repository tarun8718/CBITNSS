const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo');
const MONGOURI = require('./keys');

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo successfully");
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err);
})

const app= express();
server = http.createServer(app);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(session({
    secret: 'secret hai bro nahi bol saktha',
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: MONGOURI
    })
}));


app.use(express.static(path.join(__dirname,'views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const main = require('./Routes/main');
app.use('/', main);


const PORT = process.env.PORT || 3000;

server.listen(PORT,() => console.log(`Server listening on ${PORT}`));