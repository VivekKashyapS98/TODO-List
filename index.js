const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routing/routes');
const keys = require('./keys/key');
    app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.all('/', (req, res, next) => {
  res.sendFile(__dirname+"/static/index.html");
  next();
});

app.use(express.static("static"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/api/todos', routes);

mongoose.connect(keys.key, { useNewUrlParser: true, useUnifiedTopology: true }).then(function(){console.log("Connected to MongoDB Atlas...")})
                     .catch(function(err){console.log("Can't connect to MongoDB Atlas...Sonething Wrong!! "+err)});

app.listen(PORT, function(){
    console.log("App is running on port:"+PORT);
});
